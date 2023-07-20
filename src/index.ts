
// Import the native module. On web, it will be resolved to ExpoPlaystoreChecker.web.ts
// and on native platforms to ExpoPlaystoreChecker.ts
import ExpoPlaystoreCheckerModule from './ExpoPlaystoreCheckerModule';

// Get the native constant value.

export function isAppStoreInstalled(): boolean {
  return ExpoPlaystoreCheckerModule.isAppStoreInstalled();
}