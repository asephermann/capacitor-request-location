import { WebPlugin } from '@capacitor/core';

import type { RequestLocationPlugin } from './definitions';

export class RequestLocationWeb extends WebPlugin implements RequestLocationPlugin {
  async checkLocationPermission(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
