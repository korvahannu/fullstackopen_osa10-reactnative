import { gql } from '@apollo/client';

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
query ($includeReviews: Boolean = false) { 
  authorizedUser {
    id,
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id,
          text,
          repository {
            id,
          },
          rating,
          createdAt,
          user {
            id,
            username,
          }
        }
      }
    }
  }
}
`;

export const GET_CURRENT_AUTHORIZED_USER_WITH_REVIEWS = gql`
query { 
  authorizedUser {
    id,
    username
    reviews {
      edges {
        node {
          id,
          text,
          repository {
            id,
          },
          rating,
          createdAt,
          user {
            id,
            username,
          }
        }
      }
    }
  }
}
`;

export const GET_REPOSITORY_BY_ID = gql`

  query repositoryById($repositoryId:ID!, $after:String, $first:Int) {
    
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
      reviews (first:$first, after:$after) {
        pageInfo {
          endCursor,
          startCursor,
          hasNextPage,
        },
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