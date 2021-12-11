import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 3,
    marginLeft:'auto',
    marginRight:'auto',
    color:'#d73a4a',
    fontWeight:'bold',
    marginBottom:8
  }
});

const FormikTextInput = ({name, multiline, testID, ...props}) => {

  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  let multi = false;

  if(multiline !== null && multiline !== undefined)
    multi=true;

  if(testID === undefined || testID === null)
    testID="default";

  return(
    <>
      <TextInput multiline={multi} testID={testID} onChangeText={value => helpers.setValue(value)} onBlur={()=> helpers.setTouched(true)} value={field.value} error={showError} {...props} />
      
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );

};

export default FormikTextInput;