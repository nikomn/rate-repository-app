import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
    mutation Authenticate($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
    }
}
`;

export const CREATEREVIEW = gql`
mutation($review: CreateReviewInput) {
    createReview(
      review: $review
      ) {
          rating
          repositoryId
    }
  }
`;

export const CREATEREUSER = gql`
mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
      createdAt
    }
  }
`;
