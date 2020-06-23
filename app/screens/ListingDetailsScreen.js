import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppText from '../components/Text';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContianer}>
          <ListItem
            title='Jyd Aderibigbe'
            subTitle='5 Listings'
            image={require('../assets/jyd.jpg')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 10,
  },
  userContianer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
