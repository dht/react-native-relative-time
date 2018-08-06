
# react-native-relative-time
Gets the seconds since the OS started which can't be tampered with by the user.


## Getting started

`$ npm install react-native-relative-time --save`

`$ yarn add react-native-relative-time`

### Mostly automatic installation

`$ react-native link react-native-relative-time`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-relative-time` and add `RNRelativeTime.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRelativeTime.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRelativeTimePackage;` to the imports at the top of the file
  - Add `new RNRelativeTimePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-relative-time'
  	project(':react-native-relative-time').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-relative-time/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-relative-time')
  	```

## Usage
```javascript
import RelativeTime from 'react-native-relative-time';

      RelativeTime.getRelativeTime()
          .then(ticks => console.log(ticks);
  ```
