/* eslint-disable max-lines-per-function */
import * as Haptics from 'expo-haptics';
import * as LocalAuthentication from 'expo-local-authentication';
import { usePathname, useRouter } from 'expo-router';
import { FingerScan } from 'iconsax-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { cn } from '@/core';
import { useVerifyPinMutation } from '@/services/auth';
import { getPIN, isBiometricsEnabled } from '@/store/features/auth/utils';

import Icons from '../icons';
import LoadingModal from '../loading-modal';

type PINBiometricPadProps = {
  onChange?: (pin: string[]) => void;
  intent?:
    | 'create'
    | 'verify'
    | 'verify-online'
    | 'change'
    | 'confirm-change'
    | 'confirm-create';
  onSuccessful?: (pin?: string) => void;
  newPin?: string;
};

const PINBiometricPad = ({
  onChange,
  intent = 'verify',
  onSuccessful,
  newPin,
}: PINBiometricPadProps) => {
  const defaultPIN = getPIN();
  const OFFSET = 20;
  const TIME = 80;
  const pinLength = 4;

  const [pin, setPin] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const pathname = usePathname();

  const checkIsBiometricsEnabled = isBiometricsEnabled();

  const [verifyPIN, { isLoading }] = useVerifyPinMutation();

  useEffect(() => {
    setPin([]);
  }, [pathname]);

  const AddNumber = (number: number) => {
    if (pin.length < pinLength) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setPin([...pin, number.toString()]);
    }
  };

  const deleteNumber = () => {
    if (pin.length !== 0) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setPin((_pin) => _pin.slice(0, -1));
    }
  };

  useEffect(() => {
    onChange?.(pin);
  }, [onChange, pin]);

  const offset = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  useEffect(() => {
    if (intent === 'verify')
      if (pin.length === 4) {
        if (!defaultPIN) {
          onSuccessful?.(pin.join(''));
        } else {
          if (pin.join('') === defaultPIN) {
            onSuccessful?.(pin.join(''));
            setPin([]);
          } else {
            setIsError(true);
            offset.value = withSequence(
              withTiming(-OFFSET, { duration: TIME / 2 }),
              withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
              withTiming(0, { duration: TIME / 2 })
            );
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            setTimeout(() => {
              setPin([]);
              setIsError(false);
            }, 500);
          }
        }
      }

    if (intent === 'verify-online')
      (async () => {
        if (pin.length === 4) {
          try {
            await verifyPIN({ txnPin: +pin.join('') }).unwrap();
            onSuccessful?.(pin.join(''));
            setPin([]);
          } catch (error) {
            setIsError(true);
            offset.value = withSequence(
              withTiming(-OFFSET, { duration: TIME / 2 }),
              withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
              withTiming(0, { duration: TIME / 2 })
            );
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            setTimeout(() => {
              setPin([]);
              setIsError(false);
            }, 500);
          }
        }
      })();

    if (intent === 'confirm-change' || intent === 'confirm-create')
      if (pin.length === 4) {
        if (pin.join('') === newPin) {
          onSuccessful?.(pin.join(''));
        } else {
          setIsError(true);
          offset.value = withSequence(
            withTiming(-OFFSET, { duration: TIME / 2 }),
            withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
            withTiming(0, { duration: TIME / 2 })
          );
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
          setTimeout(() => {
            setPin([]);
          }, 500);
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intent, newPin, offset, pin, router]);

  const checkBiometrics = useCallback(async () => {
    try {
      const { success } = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate',
      });
      if (success) {
        if (intent === 'verify') onSuccessful?.(defaultPIN);
        if (intent === 'verify-online') {
          await verifyPIN({ txnPin: +defaultPIN }).unwrap();
          onSuccessful?.();
        }
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      offset.value = withSequence(
        withTiming(-OFFSET, { duration: TIME / 2 }),
        withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
        withTiming(0, { duration: TIME / 2 })
      );
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setTimeout(() => {
        setPin([]);
        setIsError(false);
      }, 500);
    }
  }, [defaultPIN, intent, offset, onSuccessful, verifyPIN]);

  return (
    <View className="flex-1 justify-between">
      <View className="mb-10 flex-row justify-center">
        <Animated.View
          style={style}
          className={cn(
            'flex-row gap-x-2.5 rounded-full border border-primary px-8 py-4',
            {
              'border-red-500': isError,
            }
          )}
        >
          {Array.from({ length: pinLength }).map((_, index) => (
            <View
              key={index}
              className={cn(
                'flex h-5 w-5 items-center justify-center rounded-full border border-primary',
                {
                  'border-red-500': isError,
                }
              )}
            >
              {pin[index] && <Icons.AsteriskIcon />}
            </View>
          ))}
        </Animated.View>
      </View>
      <View className="gap-y-6 px-5">
        <View className="w-full flex-row justify-between">
          {[1, 2, 3].map((number) => (
            <View key={number} className="overflow-hidden rounded-full">
              <Pressable
                android_ripple={{
                  color: 'rgba(10, 10, 10, 0.2)',
                  borderless: false,
                  foreground: true,
                }}
                className="h-20 w-20 items-center justify-center rounded-full"
                onPress={() => AddNumber(number)}
              >
                <Text className="font-SfPro text-3xl font-semibold">
                  {number}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
        <View className="w-full flex-row justify-between">
          {[4, 5, 6].map((number) => (
            <View key={number} className="overflow-hidden rounded-full">
              <Pressable
                android_ripple={{
                  color: 'rgba(10, 10, 10, 0.2)',
                  borderless: false,
                  foreground: true,
                }}
                className="h-20 w-20 items-center justify-center rounded-full"
                onPress={() => AddNumber(number)}
              >
                <Text className="font-SfPro text-3xl font-semibold">
                  {number}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
        <View className="w-full flex-row justify-between">
          {[7, 8, 9].map((number) => (
            <View key={number} className="overflow-hidden rounded-full">
              <Pressable
                android_ripple={{
                  color: 'rgba(10, 10, 10, 0.2)',
                  borderless: false,
                  foreground: true,
                }}
                className="h-20 w-20 items-center justify-center rounded-full"
                onPress={() => AddNumber(number)}
              >
                <Text className="font-SfPro text-3xl font-semibold">
                  {number}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
        <View className="w-full flex-row justify-between">
          <View className="overflow-hidden rounded-full">
            <Pressable
              android_ripple={{
                color: 'rgba(10, 10, 10, 0.2)',
                borderless: false,
                foreground: true,
              }}
              className="h-20 w-20 items-center justify-center rounded-full"
              onPress={checkBiometrics}
            >
              {(intent === 'verify' || intent === 'verify-online') &&
                checkIsBiometricsEnabled &&
                defaultPIN && (
                  <>
                    {Platform.OS === 'ios' ? (
                      <Icons.FaceIDIcon stroke="#141011" className="h-8 w-8" />
                    ) : (
                      <FingerScan color="#141011" size={40} />
                    )}
                  </>
                )}
            </Pressable>
          </View>
          <View className="overflow-hidden rounded-full">
            <Pressable
              android_ripple={{
                color: 'rgba(10, 10, 10, 0.2)',
                borderless: false,
                foreground: true,
              }}
              className="h-20 w-20 items-center justify-center rounded-full"
              onPress={() => AddNumber(0)}
            >
              <Text className="font-SfPro text-3xl font-semibold">0</Text>
            </Pressable>
          </View>
          <View className="overflow-hidden rounded-full">
            <Pressable
              android_ripple={{
                color: 'rgba(10, 10, 10, 0.2)',
                borderless: false,
                foreground: true,
              }}
              className="h-20 w-20 items-center justify-center rounded-full"
              onPress={deleteNumber}
            >
              {pin.length !== 0 && <Icons.BackspaceIcon />}
            </Pressable>
          </View>
        </View>
      </View>
      <LoadingModal isVisible={isLoading} />
    </View>
  );
};

export default PINBiometricPad;
