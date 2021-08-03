package tangle.fragment.compiler

import com.google.auto.service.AutoService
import com.squareup.anvil.compiler.api.AnvilContext
import com.squareup.anvil.compiler.api.CodeGenerator
import com.squareup.anvil.compiler.api.GeneratedFile
import com.squareup.anvil.compiler.internal.classesAndInnerClasses
import com.squareup.anvil.compiler.internal.requireClassDescriptor
import org.jetbrains.kotlin.descriptors.ModuleDescriptor
import org.jetbrains.kotlin.descriptors.containingPackage
import org.jetbrains.kotlin.psi.KtFile
import org.jetbrains.kotlin.resolve.scopes.DescriptorKindFilter
import org.jetbrains.kotlin.resolve.scopes.getDescriptorsFiltered
import tangle.inject.compiler.isFragment
import java.io.File

@Suppress("unused")
@AutoService(CodeGenerator::class)
class FragmentInjectInspector : CodeGenerator {

  override fun isApplicable(context: AnvilContext): Boolean = true

  override fun generateCode(
    codeGenDir: File, module: ModuleDescriptor, projectFiles: Collection<KtFile>
  ): Collection<GeneratedFile> {

    projectFiles
      .forEach { file ->

        file.classesAndInnerClasses(module)
          .map { it.requireClassDescriptor(module) }
          .filter { it.isFragment() }
          .forEach { fragmentDescriptor ->

            val c = fragmentDescriptor.unsubstitutedMemberScope
              .getDescriptorsFiltered(DescriptorKindFilter.VALUES)
              // no point in parsing android/androidx classes for injected params, so skip them
              .filter { it.containingPackage()?.asString()?.startsWith("android") == false }
              .onEach { it. }


            require(false) {
              """ -----------------------------------------------------------
                |
                |${c.joinToString("\n")}
              """.trimMargin()
            }

          }
      }


    return emptyList()
  }
}
