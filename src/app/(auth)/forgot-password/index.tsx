import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import ForgotPassword from '@/components/auth/forgot-password';

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView className="h-full flex-1 bg-black">
      <ForgotPassword />
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
