import {Dimensions} from 'react-native';

//COLORS
export const HEADER_COLOR = '#1C1F4A';
export const BACKGROUND_COLOR = '#F5F6FA';
export const LINK_COLOR = '#424DE7';
export const GREY_COLOR = '#babbbf';

//FONTS
export const GOOGLE_REGULAR = 'Google Sans';

// SIZES
export const {width: screenWidth, height: screenHeight} = Dimensions.get(
  'window',
);
let widthCoef = screenWidth / 375;
let heightCoef = screenHeight / 667;

export const scale = size => widthCoef * size;
export const verticalScale = size => heightCoef * size;
