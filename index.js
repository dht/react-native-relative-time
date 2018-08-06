
import { NativeModules } from 'react-native';

const { RNRelativeTime } = NativeModules;

export default {
    ...RNRelativeTime,
    getRelativeTime: function getRelativeTime() {
        return RNRelativeTime.getRelativeTime();
    }
};
