import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const theme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {},
};

export const COLORS = {
  powderWhite: '#FFFDF9',
  persianGreen: '#06B49A',
  lightBlue: '#AFDBD2',
  onyx: '#36313D',
  loginBlue: '#2667C9',
  white: '#ffffff',
  grey: '#f9f9f9',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  bRad: 5,
  bRadLarge: 28,
  radius: 12,
  padding: 24,
  paddingLogo: 40,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 10,
  body6: 12,

  // app dimensions
  width,
  height,
  containerWidth: width * 0.913,
};

export const FONTS = {
  largeTitle: {fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontSize: SIZES.body5, lineHeight: 22},
  body6: {fontSize: SIZES.body5, lineHeight: 22},
  body7: {fontSize: SIZES.body4, lineHeight: 22},
  body8: {fontSize: SIZES.body6, lineHeight: 22},
  body9: {fontSize: SIZES.body6, lineHeight: 16},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
