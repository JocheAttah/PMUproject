/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomSection, Button, HeaderLogo} from '../../components';
import {COLORS} from '../../constants';

import styles from './styles';

const Login = () => {
  const phoneInput = React.useRef();
  const [value, setValue] = React.useState('');
  return (
    <View style={{flex: 1, backgroundColor: COLORS.grey}}>
      <View style={styles.TopContainer}>
        <View style={styles.TopContent}>
          <View style={{flex: 1}}>
            <HeaderLogo />
            <Text style={[styles.text, styles.greeting]}>Hey There!</Text>
            <Text style={[styles.text, styles.title]}>
              Type in your phone number to get started
            </Text>
            <View style={styles.inputContainer}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="NG"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setValue(text);
                }}
                withShadow
                autoFocus
                containerStyle={{
                  borderRadius: 5,
                  width: '80%',
                }}
              />
              <Button
                name="GO"
                onPress={() => console.warn(value + ' is logging in')}
                disabled={value === '' ? true : false}
              />
            </View>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>or you can sign in with</Text>
          </View>
        </View>
      </View>
      <View style={styles.BottomContainer}>
        <BottomSection />
      </View>
    </View>
  );
};

export default Login;
