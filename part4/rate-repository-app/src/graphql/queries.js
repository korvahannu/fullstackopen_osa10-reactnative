import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories (orderBy:CREATED_AT) {
      edges {
        node {
          id
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

export const GET_REPOSITORIES_HIGHEST_TO_LOWEST = gql`
query {
  repositories (orderBy:RATING_AVERAGE) {
    edges {
      node {
        id
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

export const GET_REPOSITORIES_LOWEST_TO_HIGHEST = gql`
query {
  repositories (orderBy:RATING_AVERAGE, orderDirection:ASC) {
    edges {
      node {
        id
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
}`;

export const GET_REPO_FILTER = gql`
query ($orderBy:AllRepositoriesOrderBy, $orderDirection:OrderDirection, $searchKeyword:String) {
  repositories (orderBy:$orderBy, orderDirection:$orderDirection, searchKeyword:$searchKeyword) {
    edges {
      node {
        id
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
}`;

export const GET_CURRENT_AUTHORIZED_USER = gql`
query { 
  authorizedUser {
    id,
    username
  }
}
`;

export const GET_REPOSITORY_BY_ID = gql`

  query repositoryById($repositoryId:ID!) {
    
    repository(id:$repositoryId) {
      ownerName,
      description,
      language,
      ownerAvatarUrl,
      stargazersCount,
      forksCount,
      reviewCount,
      ratingAverage,
      url,
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }

  }

`;