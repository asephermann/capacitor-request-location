import { registerPlugin } from '@capacitor/core';

import type { RequestLocationPlugin } from './definitions';

const RequestLocation = registerPlugin<RequestLocationPlugin>('RequestLocation', {
  web: () => import('./web').then(m => new m.RequestLocationWeb()),
});

export * from './definitions';
export { RequestLocation };
