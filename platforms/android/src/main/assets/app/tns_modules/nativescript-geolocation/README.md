# NativeScript Geolocation ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png) 


[![npm](https://img.shields.io/npm/v/nativescript-geolocation.svg)](https://www.npmjs.com/package/nativescript-geolocation)
[![npm](https://img.shields.io/npm/dm/nativescript-geolocation.svg)](https://www.npmjs.com/package/nativescript-geolocation)
[![Build Status](https://travis-ci.org/NativeScript/nativescript-geolocation.svg?branch=master)](https://travis-ci.org/NativeScript/nativescript-geolocation)

Geolocation plugin to use for getting current location, monitor movement, etc.

## Installation

In Command prompt / Terminal navigate to your application root folder and run:

```
tns plugin add nativescript-geolocation
```

## Usage 

The best way to explore the usage of the plugin is to inspect the demo app in the plugin's root folder. 
In `demo` folder you can find the usage of the plugin for TypeScript non-Angular application. Refer to `demo/app/main-page.ts`.

In short here are the steps:

### Import the plugin

*TypeScript*
``` 
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums"; // used to describe at what accuracy the location should be get
```

*Javascript*
``` 
var geolocation = require("nativescript-geolocation");
```

### Request permissions

``` 
geolocation.enableLocationRequest();
```

### Call plugin methods

````
// Get current location with high accuracy
geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
````

## API

### Properties

#### Location

| Property | Default | Description |
| --- | --- | --- |
| latitude | - | The latitude of the geolocation, in degrees. |
| longitude | - | The longitude of the geolocation, in degrees. |
| altitude | - | The altitude (if available), in meters above sea level. |
| horizontalAccuracy | - | The horizontal accuracy, in meters. |
| verticalAccuracy | - | The vertical accuracy, in meters. |
| speed | - | The speed, in meters/second over ground. |
| timestamp | - | The time at which this location was determined. |

#### Options

| Property | Default | Description |
| --- | --- | --- |
| desiredAccuracy? | Accuracy.high | Specifies desired accuracy in meters. |
| updateDistance | iOS - no filter | Update distance filter in meters. Specifies how often to update the location (ignored on Android). |
| updateTime | 1 minute | Interval between location updates, in milliseconds (ignored on iOS). |
| minimumUpdateTime | 5 secs | Minimum time interval between location updates, in milliseconds (ignored on iOS). |
| maximumAge | - | How old locations to receive in ms.  |
| timeout | 5 minutes | How long to wait for a location in ms.  |
| iosAllowsBackgroundLocationUpdates | false |  If enabled, UIBackgroundModes key in info.plist is required (check the hint below). Allow the application to receive location updates in background (ignored on Android) |
| iosPausesLocationUpdatesAutomatically | true | Allow deactivation of the automatic pause of location updates (ignored on Android) |

> If iosAllowsBackgroundLocationUpdates is set to true, the following code is required in the info.plist file:
>```
><key>UIBackgroundModes</key>
><array>
>    <string>location</string>
></array>
>```

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| getCurrentLocation(options: Options) | Promise<Location> | Get current location applying the specified options (if any). |
| watchLocation(successCallback: successCallbackType, errorCallback: errorCallbackType, options: Options) | number | Monitor for location change. |
| clearWatch(watchId: number) | void | Stop monitoring for location change. Parameter expected is the watchId returned from `watchLocation`. |
| enableLocationRequest(always?: boolean) | Promise\<void\> | Ask for permissions to use location services. The option `always` is application for iOS only. [Read more about its usage](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization) . |
| isEnabled | Promise\<boolean\>| Resolves `true` or `false` based on the location services availability.  |
| distance(loc1: Location, loc2: Location) | number | Calculate the distance between two locations. Returns the distance in meters. |

## License

Apache License Version 2.0, January 2004