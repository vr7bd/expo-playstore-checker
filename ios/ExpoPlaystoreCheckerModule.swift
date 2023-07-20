import ExpoModulesCore

public class ExpoPlaystoreCheckerModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoPlaystoreChecker")
      Function("isAppStoreInstalled") {() -> Bool in true
      }
  }
}
