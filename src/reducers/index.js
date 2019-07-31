import { combineReducers } from 'redux';
import rovers from './rovers-reducer';
import selectedRover from './select-rover-reducer';
import selectedCamera from './select-camera-reducer';
import selectedDate from "./select-date-reducer";
import photos from './photos-reducer';
import photoGalleryData from './preload-photo-reducer'

const rootReducer = combineReducers({
    rovers,
    selectedRover,
    selectedCamera,
    selectedDate,
    photos,
    photoGalleryData
});

export default rootReducer;
