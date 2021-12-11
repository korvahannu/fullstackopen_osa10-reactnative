import React from "react";
import theme from "../theme";
import { Formik } from "formik";
import { Pressable, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from 'yup';
import { ADD_REVIEW } from "../graphql/mutations";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router";

import { useMutation } from "@apollo/client";

const validationSchema = yup.object().shape({
  ownerName: yup
  .string()
  .required('Repository owner name is required'),
  repositoryName: yup
  .string()
  .required('Repository name is required'),
  rating: yup
  .number()
  .min(0)
  .max(100)
  .required('Review between 0-100 is required')
});

const NewReview = () => {

  const [addReview] = useMutation(ADD_REVIEW);
  const apolloClient = useApolloClient();
  const history = useHistory();

  const onSubmit = async (values) => {
    const {ownerName, repositoryName, rating, review} = values;
    const text = review;

    console.log(ownerName + repositoryName + rating + review);

    addReview({variables:{ownerName, repositoryName, rating:parseInt(rating), text}})
    .then(response => {

      const id = response.data.createReview.repositoryId;
      apolloClient.resetStore();

      history.push(`/repositories/${id}`);

    });
  };

  return(
    <NewReviewForm onSubmit={onSubmit} />
  )
};

const NewReviewForm = ({onSubmit}) => {

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: 0,
    review: ''
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({handleSubmit}) => {
      return(
        <View>
          <Text style={theme.formHeader}>Repository owner name*</Text>
          <FormikTextInput name="ownerName" style={theme.textField} />
          <Text style={theme.formHeader}>Repository name*</Text>
          <FormikTextInput name="repositoryName" style={theme.textField}  />
          <Text style={theme.formHeader}>Repository rating (0-100)*</Text>
          <FormikTextInput name="rating" style={theme.textField} />
          <Text style={theme.formHeader}>Review text</Text>
          <FormikTextInput name="review" multiline style={theme.textField} />
          <Pressable type="submit" onPress={handleSubmit} style={theme.button}><Text style={theme.buttonText}>Create a review</Text></Pressable>
        </View>
      );
      }}
    </Formik>
  );
};

export default NewReview;