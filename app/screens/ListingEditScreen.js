import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  AppFormField,
  AppForm,
  SubmitButton,
  AppFormPicker,
} from '../components/form';
import Screen from '../components/Screen';
import CategoryPicker from '../components/CategoryPicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  { label: 'Clothing', value: 100 },
  { label: 'Camera', value: 200 },
  { label: 'Furniture', value: 1000 },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        validationSchema={validationSchema}
        handleSubmit={(item) => console.log(item)}
      >
        <AppFormField maxLength={255} name='title' placeholder='Title' />
        <AppFormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
        />
        <AppFormPicker
          items={categories}
          name='category'
          placeholder='Category'
          PickerItemComponent={CategoryPicker}
        />
        <AppFormField
          maxLength={255}
          multiline
          name='description'
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListingEditScreen;
