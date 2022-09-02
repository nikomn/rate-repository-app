import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
    query {
    repositories {
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