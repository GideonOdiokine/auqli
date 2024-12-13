/* eslint-disable max-lines-per-function */
import { Env } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { deleteRequest, getRequest, postRequest } from '@/core';
import { getToken } from '@/store/features/auth/utils';
import type {
  DeleteBeneficiariesRequest,
  DeleteBeneficiariesResponse,
  FundBettingAccountRequest,
  FundBettingAccountResponse,
  GetBeneficiariesRequest,
  GetBeneficiariesResponse,
  GetBettingServicesProvidersPackagesRequest,
  GetBettingServicesProvidersPackagesResponse,
  GetBettingServicesProvidersRequest,
  GetBettingServicesProvidersResponse,
  GetBettingServicesRequest,
  GetBettingServicesResponse,
  GetEventTicketsRequest,
  GetEventTicketsResponse,
  GetGiftCardExchangeRateRequest,
  GetGiftCardExchangeRateResponse,
  GetSAvailableGiftcardsByCountryRequest,
  GetSAvailableGiftcardsByCountryResponse,
  GetScheduledBillsRequest,
  GetScheduledBillsResponse,
  GetServiceProviderProductsRequest,
  GetServiceProviderProductsResponse,
  GetServiceProvidersRequest,
  GetServiceProvidersResponse,
  GetServicesResponse,
  PurchaseEventTicketsRequest,
  PurchaseEventTicketsResponse,
  PurchaseGiftCardRequest,
  PurchaseGiftCardResponse,
  PurchaseServiceRequest,
  PurchaseServiceResponse,
  VerifyBettingCustomerRequest,
  VerifyBettingCustomerResponse,
  VerifyInfoRequest,
  VerifyInfoResponse,
} from '@/types/services/services';

export const services = createApi({
  reducerPath: 'services',
  tagTypes: ['Services'],
  baseQuery: fetchBaseQuery({
    baseUrl: Env.API_URL + 'api/v1/billServices',
    prepareHeaders: async (headers) => {
      const token = getToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getServices: builder.query<GetServicesResponse, void>({
      query: () => getRequest('/'),
    }),
    getServiceProviders: builder.query<
      GetServiceProvidersResponse,
      GetServiceProvidersRequest
    >({
      query: (credentials) => getRequest('/providers', credentials),
    }),
    getAvailableGiftcardsByCountry: builder.query<
      GetSAvailableGiftcardsByCountryResponse,
      GetSAvailableGiftcardsByCountryRequest
    >({
      query: (credentials) => getRequest('/giftCards', credentials),
    }),
    getServiceProviderProducts: builder.query<
      GetServiceProviderProductsResponse,
      GetServiceProviderProductsRequest
    >({
      query: (credentials) => getRequest('/providers/products', credentials),
    }),
    getGiftCardExchangeRate: builder.query<
      GetGiftCardExchangeRateResponse,
      GetGiftCardExchangeRateRequest
    >({
      query: (credentials) =>
        getRequest('/giftCards/exchangeRate', credentials),
    }),
    purchaseService: builder.mutation<
      PurchaseServiceResponse,
      PurchaseServiceRequest
    >({
      query: (credentials) =>
        postRequest(
          '/makePurchase/' + credentials.billServiceType,
          credentials.body
        ),
    }),
    purchaseGiftCard: builder.mutation<
      PurchaseGiftCardResponse,
      PurchaseGiftCardRequest
    >({
      query: (credentials) => postRequest('/giftCards/', credentials.body),
    }),
    verifyInfo: builder.mutation<VerifyInfoResponse, VerifyInfoRequest>({
      query: (credentials) => postRequest('/verify/', credentials),
    }),
    getBettingServices: builder.query<
      GetBettingServicesResponse,
      GetBettingServicesRequest
    >({
      query: (credentials) => getRequest('/bettingServices', credentials),
    }),
    getBettingServicesProviders: builder.query<
      GetBettingServicesProvidersResponse,
      GetBettingServicesProvidersRequest
    >({
      query: (credentials) => getRequest('/bettingServices/7', credentials),
    }),
    getBettingServicesProvidersPackages: builder.query<
      GetBettingServicesProvidersPackagesResponse,
      GetBettingServicesProvidersPackagesRequest
    >({
      query: (credentials) =>
        getRequest('/bettingServices/providers/' + credentials.id),
    }),
    verifyBettingCustomer: builder.mutation<
      VerifyBettingCustomerResponse,
      VerifyBettingCustomerRequest
    >({
      query: (credentials) =>
        postRequest('/bettingServices/verifyCustomer', credentials),
    }),
    fundBettingAccount: builder.mutation<
      FundBettingAccountResponse,
      FundBettingAccountRequest
    >({
      query: (credentials) =>
        postRequest('/bettingServices/fund', credentials.body),
    }),
    purchaseEventTickets: builder.mutation<
      PurchaseEventTicketsResponse,
      PurchaseEventTicketsRequest
    >({
      query: (credentials) => postRequest('/eventTickets', credentials.body),
    }),
    getEventTickets: builder.query<
      GetEventTicketsResponse,
      GetEventTicketsRequest
    >({
      query: () => getRequest(Env.API_URL + 'api/v1/eventTickets'),
    }),
    getScheduledBills: builder.query<
      GetScheduledBillsResponse,
      GetScheduledBillsRequest
    >({
      query: (credentials) => getRequest('/scheduledBills', credentials),
    }),
    getBeneficiaries: builder.query<
      GetBeneficiariesResponse,
      GetBeneficiariesRequest
    >({
      query: (credentials) => getRequest('/beneficiaries', credentials),
    }),
    deleteBeneficiaries: builder.mutation<
      DeleteBeneficiariesResponse,
      DeleteBeneficiariesRequest
    >({
      query: (credentials) =>
        deleteRequest('/beneficiaries/' + credentials.id, credentials),
    }),
    deleteSchedule: builder.mutation<
      DeleteBeneficiariesResponse,
      DeleteBeneficiariesRequest
    >({
      query: (credentials) =>
        deleteRequest('/scheduledBills/' + credentials.id, credentials),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useLazyGetServiceProvidersQuery,
  useLazyGetServiceProviderProductsQuery,
  usePurchaseServiceMutation,
  usePurchaseGiftCardMutation,
  useVerifyInfoMutation,
  useGetAvailableGiftcardsByCountryQuery,
  useGetGiftCardExchangeRateQuery,
  useGetBettingServicesQuery,
  useGetBettingServicesProvidersQuery,
  useVerifyBettingCustomerMutation,
  useLazyGetBettingServicesProvidersPackagesQuery,
  useFundBettingAccountMutation,
  useGetEventTicketsQuery,
  usePurchaseEventTicketsMutation,
  useGetBeneficiariesQuery,
  useDeleteBeneficiariesMutation,
  useDeleteScheduleMutation,
  useGetScheduledBillsQuery,
} = services;
