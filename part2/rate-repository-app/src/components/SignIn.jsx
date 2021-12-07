import React from 'react';
import { Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import Text from './Text';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
  .string()
  .required('Username is required'),
  password: yup
  .string()
  .required('Password is required'),
});

const SignIn = () => {

  const initialValues = {
    username: '',
    password: ''
  };

  const login = (values) => {
    console.log(values.username);
    console.log(values.password);
  };

  return (
    
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={login}>
      {({handleSubmit}) => {
        return(
          <View>
            <FormikTextInput name="username" style={theme.textField} />
            <FormikTextInput name="password" secureTextEntry style={theme.textField}/>
            <Pressable type="submit" onPress={handleSubmit} style={theme.button}><Text style={theme.buttonText}>Sign in</Text></Pressable>
          </View>
        );
        }}
    </Formik>
  );
};

export default SignIn;