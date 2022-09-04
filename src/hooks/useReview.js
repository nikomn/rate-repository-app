import { useQuery } from '@apollo/client';

import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (variables) => {
    console.log(variables)
    // const result = useQuery(GET_REVIEWS, {
    //     fetchPolicy: 'cache-and-network',
    // });
    const { data, loading, error, fetchMore, ...result } = useQuery(GET_REVIEWS, 
        variables,
        {
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
      console.log('handleFetchMore', data)
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
          return;
        }
    
        fetchMore({
          variables: {
            after: data.repository.reviews.pageInfo.endCursor,
            ...variables,
          },
        });
      };

    //if (loading) return { repostories: null }
    
    // return data;
    if (loading) console.log('hello')
    if (!loading) {
        console.log('done loading reviews')
        if (error) console.log(error)
        if (data) console.log(data)
    }

    return {
        reviews: data?.repository.reviews,
        fetchMore: handleFetchMore,
        loading,
        ...result,
      };
  
};

export default useReviews;