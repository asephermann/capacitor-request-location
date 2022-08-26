# capacitor-request-location

A Capacitor plugin to check and request permission for using location service (Android)

## Install

```bash
npm install capacitor-request-location
npx cap sync
```

## Example

```typescript
import { RequestLocation } from 'capacitor-request-location';

checkLocationPermission = async () => {
  await RequestLocation.checkLocationPermission();
};
```
![requestlocationpermission android R](https://github.com/asephermann/pictures/blob/main/requestlocationpermission%20android%20R.jpg)

![requestlocationpermission android q.j](https://github.com/asephermann/pictures/blob/main/requestlocationpermission%20android%20q.jpg)

## API

<docgen-index>

* [`checkLocationPermission()`](#checklocationpermission)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkLocationPermission()

```typescript
checkLocationPermission() => Promise<void>
```

--------------------

</docgen-api>
