import type { Wallet } from '../wallet';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  verified: true;
  status: string;
  dob: string;
  txnPin: boolean;
  wallet: Wallet;
  notificationEnabled: boolean;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  data: {
    user: User | null;
    token: string;
  };
  errors: null | string;
  message: string;
  status: string;
};

export type SignUpRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneCode: string;
  phoneNumber: string;
  dob: string;
  referrerCode: string;
};

export type SignUpResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    temp_token: string;
  } | null;
};

export type ResendEmailOTPRequest = {
  email: string;
};

export type ResendEmailOTPResponse = {
  statusCode: number;
  message: string;
};

export type VerifyEmailRequest = {
  email: string;
  otp: string;
};

export type VerifyEmailResponse = LoginResponse;

export type ForgotPasswordRequest = {
  email: string;
};

export type ForgotPasswordResponse = {
  status: string;
  message: string;
  data: {
    email: string;
    temp_token: string;
  };
};

export type SetPINRequest = {
  txnPin: number;
};

export type SetPINResponse = {
  status: string;
  message: string;
  data: {};
};

export type ResetPasswordRequest = {
  email: string;
  resetOtp: string;
  password: string;
  confirmPassword: string;
};

export type ResetPasswordResponse = {
  status: string;
  message: string;
};

export type ResendEmailConfirmationRequest = {
  email: string;
};

export type ResendEmailConfirmationResponse = {
  success: boolean;
  statusCode: number;
  message: string;
};

export type ChangePasswordRequest = {
  oldPassword: string;
  newPassword: string;
};

export type ChangePasswordResponse = {
  success: boolean;
  statusCode: number;
  message: string;
};

export type ChangePinRequest = {
  oldTxnPin: number;
  newTxnPin: number;
};

export type ChangePinResponse = {
  success: boolean;
  statusCode: number;
  message: string;
};

export type VerifyPinRequest = {
  txnPin: number;
};

export type VerifyPinResponse = {
  success: boolean;
  statusCode: number;
  message: string;
};
