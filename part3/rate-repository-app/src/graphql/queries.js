import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ownerName,
          description,
          language,
          stargazersCount,
          forksCount,
          ratingAverage,
          reviewCount,
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_CURRENT_AUTHORIZED_USER = gql`
query { 
  authorizedUser {
    id,
    username
  }
}
`;