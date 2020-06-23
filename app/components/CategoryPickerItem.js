import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import Text from './Text';

const CategoryPicker = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <Text style={styles.labelText}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  labelText: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryPicker;
