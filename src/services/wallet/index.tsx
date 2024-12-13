import { Env } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getRequest, postRequest } from '@/core';
import { getToken } from '@/store/features/auth/utils';
import type {
  CreateWalletRequest,
  CreateWalletResponse,
  GetWalletResponse,
} from '@/types/services/wallet';

export const wallet = createApi({
  reducerPath: 'wallet',
  keepUnusedDataFor: 10,
  tagTypes: ['Wallet'],
  baseQuery: fetchBaseQuery({
    baseUrl: Env.API_URL + 'api/v1/wallet',
    prepareHeaders: async (headers) => {
      const token = getToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createWallet: builder.mutation<CreateWalletResponse, CreateWalletRequest>({
      query: (credentials) => postRequest('/createNuban', credentials),
    }),
    getWallet: builder.query<GetWalletResponse, void>({
      query: () => getRequest('/'),
    }),
  }),
});

export const { useGetWalletQuery, useCreateWalletMutation } = wallet;
