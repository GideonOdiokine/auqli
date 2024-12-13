import { Env } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getRequest, patchRequest, postRequest } from '@/core';
import { getToken } from '@/store/features/auth/utils';
import type {
  ChangePasswordRequest,
  ChangePasswordResponse,
  ChangePinRequest,
  ChangePinResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  ResendEmailConfirmationRequest,
  ResendEmailConfirmationResponse,
  ResendEmailOTPRequest,
  ResendEmailOTPResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SetPINRequest,
  SetPINResponse,
  SignUpRequest,
  SignUpResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
  VerifyPinRequest,
  VerifyPinResponse,
} from '@/types/services/auth';

export const auth = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: Env.API_URL + 'api/v1/auth',
    prepareHeaders: async (headers) => {
      const token = getToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => postRequest('/login', credentials),
    }),
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (credentials) => postRequest('/signUp', credentials),
    }),
    verifyEmail: builder.mutation<VerifyEmailResponse, VerifyEmailRequest>({
      query: (credentials) => postRequest('/verifySignUpEmailOtp', credentials),
    }),
    resendEmailOTP: builder.query<
      ResendEmailOTPResponse,
      ResendEmailOTPRequest
    >({
      query: (credentials) => getRequest('/resendEmailOtp', credentials),
    }),
    forgotPassword: builder.mutation<
      ForgotPasswordResponse,
      ForgotPasswordRequest
    >({
      query: (credentials) => postRequest('/forgotPassword', credentials),
    }),
    setPIN: builder.mutation<SetPINResponse, SetPINRequest>({
      query: (credentials) => postRequest('/pin', credentials),
    }),
    resetPassword: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordRequest
    >({
      query: (credentials) => postRequest('resetPassword', credentials),
    }),
    resendEmailConfirmation: builder.mutation<
      ResendEmailConfirmationResponse,
      ResendEmailConfirmationRequest
    >({
      query: (credentials) =>
        postRequest('/email/confirmation/resend', credentials),
    }),
    changePassword: builder.mutation<
      ChangePasswordResponse,
      ChangePasswordRequest
    >({
      query: (credentials) => patchRequest('/changePassword', credentials),
    }),
    changePin: builder.mutation<ChangePinResponse, ChangePinRequest>({
      query: (credentials) => patchRequest('/pinChange', credentials),
    }),
    verifyPin: builder.mutation<VerifyPinResponse, VerifyPinRequest>({
      query: (credentials) => postRequest('/pinVerify', credentials),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useResendEmailConfirmationMutation,
  useLazyResendEmailOTPQuery,
  useSetPINMutation,
  useChangePasswordMutation,
  useChangePinMutation,
  useVerifyPinMutation,
} = auth;
