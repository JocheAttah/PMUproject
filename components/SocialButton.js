import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const SocialButton = ({icon, name, onPress, filled, color, borderColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderColor: borderColor,
        },
      ]}>
      <Image source={icon} style={styles.icon} />
      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor: filled ? color : null,
          },
        ]}>
        <Text style={[styles.text, {color: filled ? 'white' : 'black'}]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 130,
    height: 40,
    backgroundColor: COLORS.white,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: SIZES.bRad + 5,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.15,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: SIZES.bRad + 5,
    // borderBottomRightRadius: ,
    // borderTopRightRadius: 30,
  },
  icon: {
    marginRight: 10,
    width: 18,
    height: 18,
  },
  text: {
    ...FONTS.body3,
  },
});
