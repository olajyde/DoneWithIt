import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
        <Button
          title='Register'
          color='secondary'
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 70,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
