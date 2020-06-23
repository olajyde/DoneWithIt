import React, { useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import Text from './Text';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  items,
  selectedItem,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}) => {
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
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholderText}>{placeholder}</Text>
          )}
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
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setIsVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
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
  placeholderText: {
    color: defaultStyles.colors.meduimGrey,
    flex: 1,
  },
});

export default AppPicker;
