import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Login from '@/components/auth/login';

const LoginScreen = () => {
  return (
    <SafeAreaView className="h-full flex-1 bg-black">
      <Login />
    </SafeAreaView>
  );
};

export default LoginScreen;
