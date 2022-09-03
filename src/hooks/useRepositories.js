import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
    console.log(variables)
    // const result = useQuery(GET_REPOSITORIES, {
    //     fetchPolicy: 'cache-and-network',
    // });
    const { data, loading, error, fetchMore, ...result } = useQuery(GET_REPOSITORIES, 
        variables,
        {
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
          return;
        }
    
        fetchMore({
          variables: {
            after: data.repositories.pageInfo.endCursor,
            ...variables,
          },
        });
      };

    //if (loading) return { repostories: null }
    
    // return data;
    if (loading) console.log('hello')
    if (!loading) {
        console.log('done loading')
        if (error) console.log(error)
        if (data) console.log(data)
    }

    return {
        repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading,
        ...result,
      };
  
};

export default useRepositories;