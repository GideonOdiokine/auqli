/* eslint-disable max-lines-per-function */

import 'react-phone-number-input/style.css';

import { format } from 'date-fns';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isValidPhoneNumber } from 'react-phone-number-input';

// import PhoneInput from 'react-phone-number-input/react-native-input';
import Button from '@/components/global/button';
import CheckBox from '@/components/global/check-box';
import PhoneNumberInput from '@/components/global/custom-input';
import Icons from '@/components/global/icons';
import Input from '@/components/global/input';
import Select, { OptionComponent, Trigger } from '@/components/global/select';
import { toast } from '@/core/toast';
import { useSignUpMutation } from '@/services/auth';
import { FocusAwareStatusBar } from '@/ui';

const service = [
  {
    label: 'Data',
    value: 'data',
    icon: (
      <View className="h-full w-full items-center justify-center rounded-full bg-body-text">
        <Icons.DataIcon />
      </View>
    ),
  },
  {
    label: 'Airtime',
    value: 'airtime',
    icon: (
      <View className="h-full w-full items-center justify-center rounded-full bg-body-text">
        <Icons.AirtimeIcon />
      </View>
    ),
  },
  {
    label: 'Electricity',
    value: 'electricity-bill',
    icon: (
      <View className="h-full w-full items-center justify-center rounded-full bg-body-text">
        <Icons.ElectricityIcon />
      </View>
    ),
  },
  {
    label: 'Cable TV',
    value: 'cable-tv',
    icon: (
      <View className="h-full w-full items-center justify-center rounded-full bg-body-text">
        <Icons.CableTvIcon />
      </View>
    ),
  },
];
const CreateAccount = () => {
  const router = useRouter();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      password: '',
      confirmPassword: '',
      referrerCode: '',
    },
  });

  const {
    formState: { isValid, errors },
    watch,
    control,
  } = methods;

  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    referrerCode,
    dateOfBirth,
  } = watch();

  const [signUp, { isLoading }] = useSignUpMutation();

  const handleSignUp = async () => {
    try {
      const result = await signUp({
        email,
        password,
        firstName,
        lastName,
        phoneCode: '+234',
        phoneNumber: phone.replace(/^0+/, ''),
        dob: format(new Date(dateOfBirth), 'MM-dd-yyyy'),
        referrerCode,
      }).unwrap();
      toast.success(result.message);
      router.push({
        pathname: '/(auth)/confirm-email',
        params: {
          email,
          password,
        },
      });
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <View className="h-full flex-1 bg-black">
      <FocusAwareStatusBar barStyle="light-content" />
      <SafeAreaView>
        <KeyboardAwareScrollView
          bottomOffset={10}
          className="h-full"
          showsVerticalScrollIndicator={false}
        >
          <View className="container h-full justify-between px-[21px] pb-3">
            <View>
              <View className="my-[48px] mb-10">
                <Text className="mb-2.5 text-center font-SfPro text-xl font-semibold text-body-02">
                  Create an Account!
                </Text>
                <Text className="mx-auto text-center font-SfPro  text-sm text-body-02">
                  To get max benefits at Auqli, please take a few minutes to
                  create an account.
                </Text>
              </View>
              <View className="gap-y-4 rounded-[8px] border border-[#C6C6C640] p-8">
                <FormProvider {...methods}>
                  <View className="w-full flex-row gap-x-2">
                    <View className="flex-1">
                      <Input
                        name="firstName"
                        label="First Name*"
                        placeholder="Enter your first name"
                        rules={['required']}
                        autoCapitalize="words"
                      />
                    </View>
                    <View className="flex-1">
                      <Input
                        name="lastName"
                        label="Last Name*"
                        placeholder="Enter your last name"
                        rules={['required']}
                        autoCapitalize="words"
                      />
                    </View>
                  </View>
                  <Input
                    name="userName"
                    label="Username"
                    placeholder="Enter username"
                    rules={['required']}
                    autoCapitalize="words"
                  />
                  <Input
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    rules={['required', 'email']}
                  />
                  <Select
                    name="service"
                    required
                    label="Country"
                    enableDynamicSizing={false}
                    options={service}
                    trigger={(selected) => Trigger(selected, 'Select Country')}
                    // eslint-disable-next-line max-params
                    optionComponent={(option, selected, length, index) =>
                      OptionComponent(option, selected, length, index)
                    }
                    estimatedItemSize={4}
                  />

                  <View>
                    <Text className="text-white">Phone Number</Text>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{
                        validate: (value: any) => isValidPhoneNumber(value),
                      }}
                      render={({ field: { onChange, value } }: any) => (
                        <PhoneNumberInput onChange={onChange} value={value} />
                      )}
                    />
                  </View>

                  <Input
                    name="password"
                    label="Create Password"
                    placeholder="Enter your password"
                    secureTextEntry
                    rules={['required', 'password']}
                  />
                  <Input
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Enter your password again"
                    secureTextEntry
                    rules={['required', 'confirmPassword']}
                  />

                  <View className="mt-2 w-full flex-row items-center justify-between">
                    <CheckBox
                      name="agree"
                      label="I agree with the Terms & Conditions"
                    />
                  </View>
                  <Button
                    isLoading={isLoading}
                    disabled={!isValid}
                    onPress={handleSignUp}
                    ButtonTextStyle="!text-white"
                    className=" mt-[18px] rounded !text-white"
                  >
                    Sign up
                  </Button>
                </FormProvider>
              </View>
            </View>
            <View className="mx-auto py-12 ">
              <Text className="text-center text-lg font-normal text-[#CCCCCC]">
                Don't have an account?
              </Text>
              <Link
                href="/(auth)/forgot-password"
                className="text-center text-lg font-bold text-primary"
              >
                Log in
              </Link>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CreateAccount;
