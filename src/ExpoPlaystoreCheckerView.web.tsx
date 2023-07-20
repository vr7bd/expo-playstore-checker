import * as React from 'react';

import { ExpoPlaystoreCheckerViewProps } from './ExpoPlaystoreChecker.types';

export default function ExpoPlaystoreCheckerView(props: ExpoPlaystoreCheckerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
