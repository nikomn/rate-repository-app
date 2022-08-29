import { Text, TextInput, Pressable, View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';


describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
  
        // Add your test code here
        const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories}/>);

        const repositoryItems = getAllByTestId('repositoryItem');
        const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
    
        // - repository's name
        expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik');
        expect(secondRepositoryItem).toHaveTextContent('async-library/react-async');
        // - description
        expect(firstRepositoryItem).toHaveTextContent('Build forms in React, without the tears');
        expect(secondRepositoryItem).toHaveTextContent('Flexible promise-based React data loader');
        // - language
        expect(firstRepositoryItem).toHaveTextContent('TypeScript');
        expect(secondRepositoryItem).toHaveTextContent('JavaScript');
        // - forks count
        expect(firstRepositoryItem).toHaveTextContent('1.6kForks');
        expect(secondRepositoryItem).toHaveTextContent('69Forks');
        // - stargazers count
        expect(firstRepositoryItem).toHaveTextContent('21.9kStars');
        expect(secondRepositoryItem).toHaveTextContent('1.8kStars');
        // - rating average
        expect(firstRepositoryItem).toHaveTextContent('88Rating');
        expect(secondRepositoryItem).toHaveTextContent('72Rating');
        // - and review count correctly.
        expect(firstRepositoryItem).toHaveTextContent('3Reviews');
        expect(secondRepositoryItem).toHaveTextContent('3Reviews');

        expect(1).toBe(1);
      });
    });
  });
  