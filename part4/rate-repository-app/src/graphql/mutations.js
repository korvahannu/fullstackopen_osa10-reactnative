import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login ($username: String!, $password: String!) {
    authorize(credentials:{username:$username, password:$password}) {
      accessToken
    }
  }
`;

export const ADD_REVIEW  = gql`
  mutation addReview ($ownerName: String!, $repositoryName: String!, $rating:Int!, $text:String) {

    createReview(review:{repositoryName:$repositoryName, ownerName:$ownerName, rating:$rating, text:$text}) {
      repositoryId
    }

  }
`;

export const SIGN_UP = gql`

  mutation signup ($username: String!, $password: String!) {

    createUser(user:{username:$username, password:$password}) {

      id

    }

  }

`;

export const DELETE_REVIEW = gql`

  mutation deletereview ($id: ID!) {

    deleteReview(id:$id) 

  }

`;


/*
ownerName: zeit
name: next.js
rating:
text
*/