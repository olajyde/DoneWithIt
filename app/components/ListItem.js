import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  iconComponent,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {iconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name='chevron-right'
            size={35}
            color={colors.meduimGrey}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.meduimGrey,
  },
  detailsContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
});

export default ListItem;
