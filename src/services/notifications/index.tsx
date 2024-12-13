import { Env } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getRequest, postRequest } from '@/core';
import { getToken } from '@/store/features/auth/utils';
import type {
  GetNotificationsResponse,
  ToggleNotificationsRequest,
  ToggleNotificationsResponse,
} from '@/types/services/notifications';

export const notifications = createApi({
  reducerPath: 'notifications',
  keepUnusedDataFor: 10,
  tagTypes: ['Notifications'],
  baseQuery: fetchBaseQuery({
    baseUrl: Env.API_URL + 'api/v1/notifications',
    prepareHeaders: async (headers) => {
      const token = getToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNotifications: builder.query<GetNotificationsResponse, void>({
      query: () => getRequest('/'),
      providesTags: ['Notifications'],
    }),
    readAllNotifications: builder.mutation<void, void>({
      query: () => postRequest('/readAll', {}),
      invalidatesTags: ['Notifications'],
    }),
    toggleNotifications: builder.mutation<
      ToggleNotificationsResponse,
      ToggleNotificationsRequest
    >({
      query: (credentials) => postRequest('/toggleNotification', credentials),
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useReadAllNotificationsMutation,
  useToggleNotificationsMutation,
} = notifications;
