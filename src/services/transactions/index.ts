import { Env } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getRequest } from '@/core';
import { getToken } from '@/store/features/auth/utils';
import type {
  GetTransactionsRequest,
  GetTransactionsResponse,
} from '@/types/services/transactions';

export const transactions = createApi({
  reducerPath: 'transactions',
  keepUnusedDataFor: 10,
  tagTypes: ['Transactions'],
  baseQuery: fetchBaseQuery({
    baseUrl: Env.API_URL + 'api/v1/transactions',
    prepareHeaders: async (headers) => {
      const token = getToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTransactions: builder.query<
      GetTransactionsResponse,
      GetTransactionsRequest
    >({
      query: (credentials) => getRequest('/myTransactions', credentials),
    }),
  }),
});

export const { useGetTransactionsQuery, useLazyGetTransactionsQuery } =
  transactions;
