import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        textContentType='emailAddress'
        placeholder='Email'
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        secureTextEntry
        placeholder='Password'
        textContentType='password'
        onChangeText={(pass) => setPassword(pass)}
      />
      <AppButton
        title='Login'
        onPress={() => console.log({ email, password })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
