import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <AppFormField
              name='email'
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              textContentType='emailAddress'
              placeholder='Email'
            />
            <AppFormField
              name='password'
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              secureTextEntry
              placeholder='Password'
              textContentType='password'
            />
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
