package tangle.viewmodel.compose

import android.provider.ContactsContract.Profile
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.rememberNavController

Scaffold(
bottomBar = {
  val currentSelectedItem by navController.currentScreenAsState()

  HomeBottomNavigation(
    selectedNavigation = currentSelectedItem,
    onNavigationSelected = { selected ->
      navController.navigate(selected.route) {
        launchSingleTop = true
        restoreState = true

        popUpTo(findStartDestination(navController.graph).id) {
          saveState = true
        }
      }
    },
    modifier = Modifier.fillMaxWidth()
  )
}
) {
  Box(Modifier.fillMaxSize()) {
    AppNavigation(
      navController = navController,
      onOpenSettings = onOpenSettings
    )
  }
}
@Composable
fun AppNavigation(
  navController: NavHostController,
  onOpenSettings: () -> Unit,
) {
  NavHost(
    navController = navController,
    startDestination = Screen.Discover.route
  ) {
    addDiscoverTopLevel(navController, onOpenSettings)
    addFollowingTopLevel(navController, onOpenSettings)
    addWatchedTopLevel(navController, onOpenSettings)
    addSearchTopLevel(navController, onOpenSettings)
  }
}
internal sealed class Screen(val route: String) {
  object Discover : Screen("discoverroot")
  object Following : Screen("followingroot")
  object Watched : Screen("watchedroot")
  object Search : Screen("searchroot")
}

private sealed class LeafScreen(val route: String) {
  object Discover : LeafScreen("discover")
  object Following : LeafScreen("following")
  object Trending : LeafScreen("trending")
  object Popular : LeafScreen("popular")

  object ShowDetails : LeafScreen("show/{showId}") {
    fun createRoute(showId: Long): String = "show/$showId"
  }

  object EpisodeDetails : LeafScreen("episode/{episodeId}") {
    fun createRoute(episodeId: Long): String = "episode/$episodeId"
  }

  object RecommendedShows : LeafScreen("recommendedshows")
  object Watched : LeafScreen("watched")
  object Search : LeafScreen("search")
  object Account : LeafScreen("account")
}
