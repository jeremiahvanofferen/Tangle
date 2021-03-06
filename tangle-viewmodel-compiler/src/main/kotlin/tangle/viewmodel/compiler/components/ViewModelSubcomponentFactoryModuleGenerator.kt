package tangle.viewmodel.compiler.components

import com.squareup.anvil.compiler.api.GeneratedFile
import com.squareup.kotlinpoet.AnnotationSpec
import com.squareup.kotlinpoet.FileSpec
import com.squareup.kotlinpoet.KModifier
import com.squareup.kotlinpoet.TypeSpec
import org.jetbrains.kotlin.descriptors.resolveClassByFqName
import org.jetbrains.kotlin.incremental.components.NoLookupLocation.FROM_BACKEND
import org.jetbrains.kotlin.name.FqName
import tangle.inject.compiler.ClassNames
import tangle.inject.compiler.FileGenerator
import tangle.inject.compiler.addFunction
import tangle.inject.compiler.buildFile
import java.io.File

class ViewModelSubcomponentFactoryModuleGenerator : FileGenerator<MergeComponentParams> {

  override fun generate(
    codeGenDir: File,
    params: MergeComponentParams
  ): GeneratedFile? {

    val moduleFqName =
      FqName(
        "${params.subcomponentModulePackageName}.${params.subcomponentModuleClassName.simpleName}"
      )

    // If the (Dagger) Module for this scope already exists in a different Gradle module,
    // it can't be created again here without creating a duplicate binding
    // for the TangleFragmentFactory.
    val alreadyCreated = listOf(params.module)
      .plus(params.module.allDependencyModules)
      .any { depMod ->
        depMod.resolveClassByFqName(moduleFqName, FROM_BACKEND) != null
      }

    if (alreadyCreated) {
      return null
    }

    val packageName = params.subcomponentModulePackageName

    val className = params.subcomponentModuleClassName

    val mapSubcomponentClassName = params.mapSubcomponentClassName

    val keysSubcomponentClassName = params.keysSubcomponentClassName

    val content = FileSpec.buildFile(packageName, className.simpleName) {
      TypeSpec.interfaceBuilder(className)
        .addAnnotation(
          AnnotationSpec.builder(ClassNames.contributesTo)
            .addMember("%T::class", params.scopeClassName)
            .build()
        )
        .addAnnotation(
          AnnotationSpec.builder(ClassNames.module)
            .addMember(
              "subcomponents??=??[%T::class,??%T::class]",
              mapSubcomponentClassName,
              keysSubcomponentClassName
            )
            .build()
        )
        .addFunction(
          "bind_${params.mapSubcomponentFactoryClassName.simpleNames.joinToString("_")}IntoSet"
        ) {
          addModifiers(KModifier.ABSTRACT)
          returns(ClassNames.tangleViewModelMapSubcomponentFactory)
          addParameter("factory", params.mapSubcomponentFactoryClassName)
          addAnnotation(ClassNames.binds)
          build()
        }
        .addFunction(
          "bind_${params.keysSubcomponentFactoryClassName.simpleNames.joinToString("_")}IntoSet"
        ) {
          addModifiers(KModifier.ABSTRACT)
          returns(ClassNames.tangleViewModelKeysSubcomponentFactory)
          addParameter("factory", params.keysSubcomponentFactoryClassName)
          addAnnotation(ClassNames.binds)
          build()
        }
        .build()
        .let { addType(it) }
    }

    return createGeneratedFile(codeGenDir, packageName, className.simpleName, content)
  }
}
