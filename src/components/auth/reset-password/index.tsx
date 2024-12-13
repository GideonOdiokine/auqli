/* eslint-disable max-lines-per-function */
import { Link, router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomSheet from '@/components/global/bottom-sheet';
import Button from '@/components/global/button';
import Input from '@/components/global/input';
import { toast } from '@/core/toast';
import { useResetPasswordMutation } from '@/services/auth';
import { FocusAwareStatusBar } from '@/ui';

import { emailNotGottenInstructions } from '../confirm-email';

const ResetPassword = () => {
  const [show, setShow] = useState(false);

  const params = useLocalSearchParams();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      resetCode: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    watch,
    formState: { isValid },
  } = methods;

  const data = watch();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onSubmit = async () => {
    try {
      const result = await resetPassword({
        email: params.email as string,
        resetOtp: data.resetCode,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }).unwrap();
      toast.success(result.message);
      router.push('/(auth)/login');
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        className="h-full flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FocusAwareStatusBar barStyle="dark-content" />
        <SafeAreaView edges={['bottom', 'left', 'right']}>
          <ScrollView className="h-full">
            <View className="container h-full justify-between">
              <View>
                <View className="mb-11">
                  <Text className="mb-2.5 font-SfPro text-xl font-semibold text-title">
                    Check your email 📩
                  </Text>
                  <Text className="font-SfPro text-base text-body-02">
                    Enter the 6 digit reset code SurestPay sent to
                    ysemiraefe@gmail.com.{' '}
                    <Link
                      onPress={() => {
                        setShow(true);
                      }}
                      href="/(auth)/reset-password"
                    >
                      <Text className="text-primary underline">
                        Didn’t receive the mail?.
                      </Text>
                    </Link>
                  </Text>
                </View>
                <View className="gap-y-4">
                  <FormProvider {...methods}>
                    <Input
                      name="resetCode"
                      label="Enter your reset code"
                      placeholder="Enter your reset code"
                      keyboardType="number-pad"
                      rules={['required', 'otp']}
                    />
                    <Input
                      name="password"
                      label="Enter new password"
                      placeholder="Enter your new password"
                      secureTextEntry
                      rules={['required', 'password']}
                    />
                    <Input
                      name="confirmPassword"
                      label="Re - type new password"
                      placeholder="Re - type your new password"
                      secureTextEntry
                      rules={['required', 'confirmPassword']}
                    />
                  </FormProvider>
                </View>
              </View>
              <Button
                isLoading={isLoading}
                disabled={!isValid}
                onPress={onSubmit}
                className="mb-4 mt-10"
              >
                Reset Password
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>

      <BottomSheet
        show={show}
        title="Didn’t get the email? 📩"
        titleCenter={false}
        onRequestClose={() => {
          setShow(false);
        }}
        showCloseIcon={true}
      >
        <View className="pb-6 pt-1">
          <Text className="mb-4 font-SfPro text-base font-normal text-body-02">
            If you don't see an email from us within 5 minutes, one of these
            things could have happened
          </Text>
          <View className="gap-4">
            {emailNotGottenInstructions.map((instruction, index) => {
              return (
                <View key={index} className="flex-row gap-2">
                  <Text className="font-SfPro text-base font-normal text-body-02">
                    {index + 1}.
                  </Text>
                  <Text className="flex-1 font-SfPro text-base font-normal text-body-02">
                    {instruction}
                  </Text>
                </View>
              );
            })}
          </View>
          <Pressable
            className="mt-6"
            onPress={() => {
              router.back();
            }}
          >
            <Text className="text-primary underline">
              Re - enter your email and try again
            </Text>
          </Pressable>
        </View>
      </BottomSheet>
    </>
  );
};

export default ResetPassword;
