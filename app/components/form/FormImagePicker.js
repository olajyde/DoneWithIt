import React from 'react';
import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

const FormImagePicker = ({ name }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
    setImageUris();
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default FormImagePicker;
