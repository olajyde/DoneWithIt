import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({ name, items, placeholder, PickerItemComponent }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormPicker;
