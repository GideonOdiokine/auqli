/* eslint-disable react/no-unstable-nested-components */
import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { useSelector } from 'react-redux';

import Header from '@/components/global/header';
import type { RootState } from '@/store';
import { colors } from '@/ui';

const AuthLayout = () => {
  const status = useSelector((state: RootState) => state.authState.status);

  if (status === 'signIn') {
    return <Redirect href="/" />;
  }

  return (
    <Stack
      screenOptions={{
        navigationBarColor: colors.background,
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="login/index"
        options={{
          // header: (props) => <Header {...props} />,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="create-account/index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="forgot-password/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="reset-password/index"
        options={{
          header: (props) => <Header {...props} />,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
