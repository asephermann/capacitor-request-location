import { WebPlugin } from '@capacitor/core';

import type { RequestLocationPlugin } from './definitions';

export class RequestLocationWeb extends WebPlugin implements RequestLocationPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
