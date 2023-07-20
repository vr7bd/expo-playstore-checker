import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoPlaystoreChecker.web.ts
// and on native platforms to ExpoPlaystoreChecker.ts
import ExpoPlaystoreCheckerModule from './ExpoPlaystoreCheckerModule';
import ExpoPlaystoreCheckerView from './ExpoPlaystoreCheckerView';
import { ChangeEventPayload, ExpoPlaystoreCheckerViewProps } from './ExpoPlaystoreChecker.types';

// Get the native constant value.
export const PI = ExpoPlaystoreCheckerModule.PI;

export function hello(): string {
  return ExpoPlaystoreCheckerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoPlaystoreCheckerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoPlaystoreCheckerModule ?? NativeModulesProxy.ExpoPlaystoreChecker);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoPlaystoreCheckerView, ExpoPlaystoreCheckerViewProps, ChangeEventPayload };
