import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import Button from '@/components/global/button';
import CheckBox from '@/components/global/check-box';
import Input from '@/components/global/input';
import { toast } from '@/core/toast';
import { useLoginMutation } from '@/services/auth';
import { FocusAwareStatusBar } from '@/ui';

const Login = () => {
  const dispatch = useDispatch();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
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
                    source={require('assets/images/lock.png')}
                    resizeMode="contain"
                    className="mx-auto mb-[18px] h-[48px] w-[390px]"
                  />
                  <Text className="mb-2.5 text-center font-SfPro text-xl font-semibold text-white">
                    Welcome back!
                  </Text>
                  <Text className="text-center font-SfPro text-base text-[#425466]">
                    Enter your email and we will send you a reset link
                  </Text>
                </View>
                <View className="w-full gap-y-4 rounded-[8px] border border-[#C6C6C640] p-8">
                  <FormProvider {...methods}>
                    <Input
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      keyboardType="email-address"
                      rules={['required', 'email']}
                    />
                    <View className="mt-2 pr-4">
                      <CheckBox
                        name="remember"
                        label="By creating an account means you agree to the Terms and Conditions, and our Privacy Policy"
                      />
                    </View>
                    <Button
                      isLoading={isLoading}
                      disabled={!isValid}
                      onPress={onSubmit}
                      ButtonTextStyle="!text-white"
                      className="mb-4 mt-[18px] rounded !text-white"
                    >
                      Continue
                    </Button>
                  </FormProvider>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;
