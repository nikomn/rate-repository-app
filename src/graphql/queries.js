import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
  query Repositories($first: Int, $after: String) {
    repositories(first: $first, after: $after) {
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