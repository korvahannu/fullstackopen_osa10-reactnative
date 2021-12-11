import React from "react";
import theme from "../theme";
import { Formik } from "formik";
import { Pressable, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from 'yup';

import { SIGN_UP } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup
  .string()
  .required('Invalid username')
  .min(1, "username too short")
  .max(30, "username too long"),
  password: yup
  .string()
  .required('Invalid password')
  .min(5, "password too short")
  .max(50, "password too long"),
  passwordConfirmation: yup
  .string()
  .oneOf([yup.ref('password'), null], "Passwords dont match")
  .required('Password confirmation is required')
});

const SignUp = () => {

  const [signIn] = useSignIn();
  const [createUser] = useMutation(SIGN_UP);
  
  const onSubmit = (values) => {
    const {username, password} = values;

    createUser({variables:{username, password}})
    .then(response => {

      signIn({ username, password }); //signIn resets apollo client aswell

    });

  };

  return (
    <SignUpForm onSubmit={onSubmit} />
  )
};

const SignUpForm = ({onSubmit}) => {

  const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: ''
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({handleSubmit}) => {
      return(
        <View>
          <Text style={theme.formHeader}>Username</Text>
          <FormikTextInput name="username" style={theme.textField} />
          <Text style={theme.formHeader}>Password</Text>
          <FormikTextInput name="password" secureTextEntry style={theme.textField}  />
          <Text style={theme.formHeader}>Confirm password</Text>
          <FormikTextInput name="passwordConfirmation" secureTextEntry style={theme.textField} />
          <Pressable type="submit" onPress={handleSubmit} style={theme.button}><Text style={theme.buttonText}>Sign up</Text></Pressable>
        </View>
      );
      }}
    </Formik>
  );
};

export default SignUp;