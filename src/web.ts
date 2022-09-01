import { WebPlugin } from '@capacitor/core';

import type { RequestLocationPlugin } from './definitions';

export class RequestLocationWeb extends WebPlugin implements RequestLocationPlugin {
  async isLocationPermissionGranted(): Promise<{ isGranted: boolean }> {
    throw new Error('Method not implemented.');
  }
  async isAlwaysAllowLocation(): Promise<{ isAlways: boolean }> {
    throw new Error('Method not implemented.');
  }
  async requestPermission(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
