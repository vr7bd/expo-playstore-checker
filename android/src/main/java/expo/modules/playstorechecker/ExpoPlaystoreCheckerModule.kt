package expo.modules.playstorechecker

import android.content.pm.PackageManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
class ExpoPlaystoreCheckerModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoPlaystoreChecker")

    Function("isAppStoreInstalled")  {

      android.util.Log.d("expo-playstore-checker", "isAppStoreInstalled");
      try {
        val info = appContext.reactContext?.packageManager?.getPackageInfo("com.android.vending", PackageManager.GET_META_DATA);

      } catch (e: PackageManager.NameNotFoundException) {
        return@Function false
      }
      return@Function true

    }
  }
}
