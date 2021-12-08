import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ style, error, ...props }) => {

  const textInputStyle=[style];

  const additionalStyles = StyleSheet.create({
    errorStyle: {
      borderLeftWidth:2,
      borderRightWidth:2,
      borderTopWidth:2,
      borderBottomWidth:2,
      borderColor:'#d73a4a',
      borderStyle:'solid'
    }
  });

  if(error)
    textInputStyle.push(additionalStyles.errorStyle);

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;