import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { iPerson, iWarsResponse } from '../interfaces/start-wars.interface';

export const startWarsAPI = createApi({
  reducerPath: 'startWarsAPI',
  tagTypes: ['startWarsAPI'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: builder => ({
    getCharactersByPage: builder.query<iWarsResponse, number>({
      query: page => `people?page=${page}`
    }),

    getCharacterByID: builder.mutation<iPerson, number>({
      query: id => `people/${id}`
    }),

    searchCharacters: builder.query<iWarsResponse, string>({
      query: searchText => `people?search=${searchText}`
    }),
    search: builder.mutation<iWarsResponse, string>({
      query: searchText => `people?search=${searchText}`
    })
  })
});

export const {
  useGetCharactersByPageQuery,
  useSearchCharactersQuery,
  useGetCharacterByIDMutation,
  useSearchMutation
} = startWarsAPI;
