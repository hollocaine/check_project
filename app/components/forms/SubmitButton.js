import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import Button from '../Button';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
