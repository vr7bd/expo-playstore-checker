import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoPlaystoreCheckerViewProps } from './ExpoPlaystoreChecker.types';

const NativeView: React.ComponentType<ExpoPlaystoreCheckerViewProps> =
  requireNativeViewManager('ExpoPlaystoreChecker');

export default function ExpoPlaystoreCheckerView(props: ExpoPlaystoreCheckerViewProps) {
  return <NativeView {...props} />;
}
