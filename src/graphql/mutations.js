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
