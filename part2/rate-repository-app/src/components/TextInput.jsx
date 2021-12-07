import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ style, error, ...props }) => {

  const textInputStyle=[style];

  const additionalStyles = StyleSheet.create({
    errorStyle: {
      border:'2px solid #d73a4a'
    }
  });

  if(error)
    textInputStyle.push(additionalStyles.errorStyle);

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;