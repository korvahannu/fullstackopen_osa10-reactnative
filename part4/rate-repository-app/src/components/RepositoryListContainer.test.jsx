import React from 'react';
import { RepositoryListContainer } from './RepositoryListContainer';
import { render, fireEvent } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        data: {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          repositories: {
            edges: [
              {
                node: {
                  id: 'jaredpalmer.formik',
                  ownerName: 'jaredpalmer/formik',
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
                  ownerName: 'async-library/react-async',
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
            ]
          },
        },
      };

      const { getByTestId, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      /*
        Tämän olisi voinut kyllä tehdä jollain perus silmukalla
       */

      const owners = getAllByTestId("ownerName");
      expect(getAllByTestId("ownerName")).toHaveLength(2);
      expect(owners[0]).toHaveTextContent("jaredpalmer/formik");
      expect(owners[1]).toHaveTextContent("async-library/react-async");

      const description = getAllByTestId("description");
      expect(getAllByTestId("description")).toHaveLength(2);
      expect(description[0]).toHaveTextContent("Build forms in React, without the tears");
      expect(description[1]).toHaveTextContent("Flexible promise-based React data loader");

      const language = getAllByTestId("language");
      expect(getAllByTestId("language")).toHaveLength(2);
      expect(language[0]).toHaveTextContent("TypeScript");
      expect(language[1]).toHaveTextContent("JavaScript");

      const forks = getAllByTestId("forks");
      expect(getAllByTestId("forks")).toHaveLength(2);
      expect(forks[0]).toHaveTextContent("1.6k");
      expect(forks[1]).toHaveTextContent("69");

      const stars = getAllByTestId("stars");
      expect(getAllByTestId("stars")).toHaveLength(2);
      expect(stars[0]).toHaveTextContent("21.9k");
      expect(stars[1]).toHaveTextContent("1.8k");

      const ratingCount = getAllByTestId("ratingCount");
      expect(getAllByTestId("ratingCount")).toHaveLength(2);
      expect(ratingCount[0]).toHaveTextContent("3");
      expect(ratingCount[1]).toHaveTextContent("3");

      const ratingAverage = getAllByTestId("ratingAverage");
      expect(getAllByTestId("ratingAverage")).toHaveLength(2);
      expect(ratingAverage[0]).toHaveTextContent("88");
      expect(ratingAverage[1]).toHaveTextContent("72");

      expect(1).toBe(1);
    });
  });
});