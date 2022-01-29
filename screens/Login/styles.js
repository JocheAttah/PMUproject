import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,
    backgroundColor: COLORS.loginBlue,
    paddingTop: 70,
  },
  BottomContainer: {
    width: SIZES.containerWidth,
    alignSelf: 'center',
    backgroundColor: COLORS.grey,
  },
  TopContent: {
    flex: 1,
    width: SIZES.containerWidth,
    alignSelf: 'center',
  },
  text: {
    color: COLORS.white,
  },
  greeting: {
    marginTop: 60,
    ...FONTS.body1,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 10,
    ...FONTS.body2,
    marginBottom: 60,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  bottomTextContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  bottomText: {
    textAlign: 'center',
    color: COLORS.white,
    justifyContent: 'flex-end',
  },
});

export default styles;
