import React from 'react';
import { Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import Text from './Text';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';


const validationSchema = yup.object().shape({
  username: yup
  .string()
  .required('Username is required'),
  password: yup
  .string()
  .required('Password is required'),
});

export const SignInForm = ({onSubmit}) => {

  const initialValues = {
    username: '',
    password: ''
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({handleSubmit}) => {
      return(
        <View>
          <FormikTextInput name="username" style={theme.textField} testID="fieldUsername" />
          <FormikTextInput name="password" secureTextEntry style={theme.textField} testID="fieldPassword" />
          <Pressable type="submit" onPress={handleSubmit} style={theme.button} testID="submitButton"><Text style={theme.buttonText}>Sign in</Text></Pressable>
        </View>
      );
      }}
    </Formik>
  );
};

const SignIn = () => {

  const [signIn] = useSignIn();

  const onSubmit = (values) => {
    const {username, password} = values;
    signIn({ username, password });
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;