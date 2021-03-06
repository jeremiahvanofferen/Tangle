package tangle.viewmodel.compiler

import com.squareup.anvil.compiler.api.GeneratedFile
import com.squareup.anvil.compiler.internal.capitalize
import com.squareup.kotlinpoet.FileSpec
import com.squareup.kotlinpoet.KModifier.INTERNAL
import com.squareup.kotlinpoet.PropertySpec
import com.squareup.kotlinpoet.TypeSpec
import tangle.inject.compiler.*
import java.io.File

internal class ViewModelFactoryGenerator : FileGenerator<ViewModelParams> {
  override fun generate(
    codeGenDir: File,
    params: ViewModelParams
  ): GeneratedFile {

    val packageName = params.packageName
    val classNameString = params.viewModelFactoryClassNameString

    val factoryConstructorParams =
      params.viewModelFactoryConstructorParams + params.memberInjectedParams

    val typeSpecBuilder =
      TypeSpec.classBuilder(params.viewModelFactoryClassName)

    val content = FileSpec.buildFile(packageName, classNameString) {
      typeSpecBuilder
        .applyEach(params.typeParameters) { addTypeVariable(it) }
        .apply {
          primaryConstructor(
            com.squareup.kotlinpoet.FunSpec.constructorBuilder()
              .addAnnotation(ClassNames.inject)
              .applyEach(factoryConstructorParams) { parameter ->
                addParameter(parameter.name, parameter.providerTypeName)
              }
              .build()
          )
        }
        .applyEach(factoryConstructorParams) { parameter ->

          val qualifierAnnotationSpecs = parameter.qualifiers

          addProperty(
            PropertySpec.builder(parameter.name, parameter.providerTypeName)
              .initializer(parameter.name)
              .addModifiers(INTERNAL)
              .applyEach(qualifierAnnotationSpecs) { addAnnotation(it) }
              .build()
          )
        }
        .addFunction("create") {
          returns(returnType = params.viewModelClassName)

          val constructorArguments = params.viewModelConstructorParams.asArgumentList(
            asProvider = true,
            includeModule = false
          )

          val tangleParams = params.viewModelConstructorParams
            .filter { it.isTangleParam }

          if (params.savedStateParam != null && tangleParams.isNotEmpty()) {
            tangleParams.forEach { param ->

              val tangleParamName = param.tangleParamName

              require(
                !tangleParamName.isNullOrEmpty(),
                params.viewModelClassDescriptor
              ) {
                "parameter ${param.name} is annotated with ${FqNames.tangleParam.asString()}, " +
                  "but does not have a valid key."
              }

              addStatement(
                "val??%L??=??${params.savedStateParam.name}.get().get<%T>(%S)",
                param.name,
                param.typeName,
                tangleParamName
              )
              if (!param.typeName.isNullable) {
                beginControlFlow("checkNotNull(%L)??{", param.name)
                addStatement("\"Required parameter with name `%L` \" +", tangleParamName)
                addStatement("\"and type `%L` is missing from SavedStateHandle.\"", param.typeName)
                endControlFlow()
              }
            }
          }

          if (params.memberInjectedParams.isEmpty()) {
            addStatement(
              "return??%T($constructorArguments)",
              params.viewModelClassName
            )
          } else {

            addStatement(
              "val??instance??=??%T($constructorArguments)",
              params.viewModelClassName
            )

            val memberInjectParameters = params.memberInjectedParams

            memberInjectParameters.forEach { parameter ->

              val propertyName = parameter.name
              val functionName = "inject${propertyName.capitalize()}"

              val param = when {
                parameter.isWrappedInProvider -> parameter.name
                parameter.isWrappedInLazy -> "${FqNames.daggerDoubleCheck}.lazy(${parameter.name})"
                else -> parameter.name + ".get()"
              }

              addStatement("%T.$functionName(instance, $param)", parameter.memberInjectorClass)
            }
            addStatement("return??instance")
          }
        }
        .build()
        .let { addType(it) }
    }

    return createGeneratedFile(codeGenDir, packageName, classNameString, content)
  }
}
