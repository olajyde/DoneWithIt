import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../Picker';
import ErrorMessage from './ErrorMessage';

const FormPicker = ({
  name,
  items,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
}) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default FormPicker;
