import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, ...rest }) => {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();

  return (
    <>
      <AppTextInput
        {...rest}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFormField;
