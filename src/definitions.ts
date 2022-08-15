export interface RequestLocationPlugin {
  checkLocationPermission(): Promise<void>;
}
