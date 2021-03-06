import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/form';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name='email'
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          textContentType='emailAddress'
          placeholder='Email'
        />
        <FormField
          name='password'
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          secureTextEntry
          placeholder='Password'
          textContentType='password'
        />
        <SubmitButton title='Login' />
      </Form>
    </Screen>
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
