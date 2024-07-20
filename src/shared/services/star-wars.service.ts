// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { iPerson, iWarsResponse } from '../interfaces/start-wars.interface';

// Define a service using a base URL and expected endpoints
export const startWarsAPI = createApi({
  reducerPath: 'startWarsAPI',
  tagTypes: ['startWarsAPI'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: builder => ({
    getCharactersByPage: builder.query<iWarsResponse, number>({
      query: page => `people?page=${page}`
    }),
    searchCharacters: builder.query<iWarsResponse, string>({
      query: searchText => `people?search=${searchText}`
    }),
    getCharacterByID: builder.mutation<iPerson, number>({
      query: id => `people/${id}`
    }),
    search: builder.mutation<iWarsResponse, string>({
      query: searchText => `people?search=${searchText}`
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCharactersByPageQuery,
  useSearchCharactersQuery,
  useSearchMutation,
  useGetCharacterByIDMutation
} = startWarsAPI;
