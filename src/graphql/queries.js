import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
  query Repositories($first: Int, $after: String, $orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy) {
    repositories(first: $first, after: $after, orderDirection: $orderDirection, orderBy: $orderBy) {
        edges {
        node {
            id
            fullName
            description
            language
            forksCount
            stargazersCount
            ratingAverage
            reviewCount
            ownerAvatarUrl
        }
        cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
    }
    }
`;

export const GET_REPOSITORY = gql`
  query Avatar($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ownerAvatarUrl
    }
  }
`;

export const GET_REVIEWS = gql`
  query Review($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
        id
        fullName
        reviews(first: $first, after: $after) {
          totalCount
      edges {
        node {
          id
          text
          rating
          createdAt
          repositoryId
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`;