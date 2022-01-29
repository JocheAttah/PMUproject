import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import {SocialButton} from '.';
import {Facebook, Google} from '../constants/images';

const BottomSection = () => {
  return (
    <View style={styles.container}>
      <SocialButton
        icon={Facebook}
        name="Facebook"
        borderColor={COLORS.loginBlue}
        onPress={() => console.warn('login with Facebook')}
      />
      <SocialButton
        icon={Google}
        name="Google"
        filled
        color={COLORS.loginBlue}
        borderColor="#c7c7c7"
        onPress={() => console.warn('login with Google')}
      />
    </View>
  );
};

export default BottomSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '80%',
    paddingVertical: 30,
    paddingBottom: 50,
  },
});
