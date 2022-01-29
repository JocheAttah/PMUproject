import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import {Logo} from '../constants/images';
const HeaderLogo = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={Logo} style={styles.icon} />
      <Text style={{...FONTS.largeTitle, color: COLORS.white}}>Pickmeup</Text>
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 52,
    height: 52,
    marginRight: 10,
  },
});
