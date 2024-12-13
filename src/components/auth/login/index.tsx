/* eslint-disable max-lines-per-function */
import Intercom from '@intercom/intercom-react-native';
import { Link } from 'expo-router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, ScrollView, Text, View } from 'react-native';
import { CONSTANTS, JSHmac } from 'react-native-hash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import Button from '@/components/global/button';
import CheckBox from '@/components/global/check-box';
import Icons from '@/components/global/icons';
import Input from '@/components/global/input';
import { toast } from '@/core/toast';
import { useLoginMutation } from '@/services/auth';
import { signIn } from '@/store/features/auth/authSlice';
import {
  getUserEmail,
  setPassword,
  setUserEmail,
} from '@/store/features/auth/utils';
import { FocusAwareStatusBar } from '@/ui';

const Login = () => {
  const dispatch = useDispatch();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: getUserEmail() ?? '',
      password: '',
    },
  });

  const {
    formState: { isValid },
    watch,
  } = methods;

  const data = watch();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async () => {
    try {
      const { email, password } = data;
      const result = await login({
        email,
        password,
      }).unwrap();
      dispatch(signIn(result));
      setPassword(password);
      setUserEmail(email);

      const secretKey = 'GdoPEzQX8YHGye4u1Xk4a-sk5Zaoq0OKTdLiA_VC'; // IMPORTANT: your web Identity Verification secret key - keep it safe!
      const userIdentifier = result?.data?.user?.id!; // IMPORTANT: a UUID to identify your user

      const hash = await JSHmac(
        userIdentifier,
        secretKey,
        CONSTANTS.HmacAlgorithms.HmacSHA256
      );

      Intercom.setUserHash(hash);

      Intercom.loginUserWithUserAttributes({
        name:
          result?.data?.user?.firstName! + ' ' + result?.data?.user?.lastName!,
        email: email,
        userId: result?.data?.user?.id!,
        phone: result?.data?.user?.phoneNumber!,
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  return (
    <>
      <FocusAwareStatusBar barStyle="light-content" />
      <SafeAreaView>
        <KeyboardAwareScrollView
          bottomOffset={10}
          showsVerticalScrollIndicator={false}
          className="h-full"
        >
          <ScrollView>
            <View className="container h-full w-full justify-between px-[21px]">
              <View className="w-full">
                <View className="my-10 ">
                  <Image
                    source={require('assets/images/waving.png')}
                    resizeMode="contain"
                    className="mx-auto mb-[18px] h-[48px] w-[390px]"
                  />
                  <Text className="mb-2.5 text-center font-SfPro text-xl font-semibold text-white">
                    Welcome back!
                  </Text>
                  <Text className="text-center font-SfPro text-base text-[#425466]">
                    Let’s build something great
                  </Text>
                </View>
                <View className="gap-y-4 rounded-[8px] border border-[#C6C6C640] p-8">
                  <FormProvider {...methods}>
                    <Input
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      keyboardType="email-address"
                      rules={['required', 'email']}
                    />
                    <Input
                      name="password"
                      label="Password"
                      placeholder="Enter your password"
                      secureTextEntry
                      rules={['required']}
                    />
                    <View className="mt-2 w-full flex-row items-center justify-between">
                      <CheckBox name="remember" label="Remember me" />
                      <Link href="/(auth)/forgot-password">
                        <Text className="text-sm text-primary">
                          Forgot password?
                        </Text>
                      </Link>
                    </View>
                    <Button
                      isLoading={isLoading}
                      disabled={!isValid}
                      onPress={onSubmit}
                      ButtonTextStyle="!text-white"
                      className="mb-4 mt-[18px] rounded !text-white"
                    >
                      Log in
                    </Button>
                    <View className="flex-row items-center">
                      <View className="h-px flex-1 bg-primary" />
                      <View>
                        <Text className="w-[50px] text-center text-sm text-white">
                          {' '}
                          Or{' '}
                        </Text>
                      </View>
                      <View className="h-px flex-1 bg-primary" />
                    </View>
                    <Button
                      isLoading={isLoading}
                      ButtonTextStyle="!text-primary"
                      variant="secondary"
                      className=" mt-[18px] rounded border border-[#00A353] !bg-[#FFFFFF] !text-white"
                      icon={<Icons.GoogleIcon />}
                    >
                      Continue with Google
                    </Button>
                  </FormProvider>
                </View>
              </View>
              <View className="mx-auto py-12 ">
                <Text className="text-center text-lg font-normal text-[#CCCCCC]">
                  Don't have an account?
                </Text>
                <Link
                  href="/(auth)/create-account"
                  className="text-center text-lg font-bold text-primary"
                >
                  Sign up
                </Link>
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;
