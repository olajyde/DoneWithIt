import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import AppText from './AppText';

const AppPicker = ({ icon, placeholder, ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisible(!isVisible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={defaultStyles.colors.meduimGrey}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.meduimGrey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setIsVisible(false)} />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
