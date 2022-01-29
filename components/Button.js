import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const Button = ({onPress, name, disabled}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingHorizontal: 15,
    marginLeft: 5,
    borderWidth: 2,
    borderRadius: SIZES.bRad,
    // width: 70,
    borderColor: COLORS.white,
  },
  text: {
    color: COLORS.white,
    ...FONTS.body2,
  },
});
