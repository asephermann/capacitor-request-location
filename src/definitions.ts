export interface RequestLocationPlugin {
  isLocationPermissionGranted(): Promise<{ isGranted: boolean }>;
  isAlwaysAllowLocation(): Promise<{ isAlways: boolean }>;
  requestPermission(): Promise<void>;
}
