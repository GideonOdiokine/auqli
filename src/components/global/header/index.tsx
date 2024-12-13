import type { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icons from '../icons';

const Header = ({
  options,
  showTitle = false,
  right,
  bottom,
}: (BottomTabHeaderProps | NativeStackHeaderProps) & {
  showTitle?: boolean;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
}) => {
  const { top } = useSafeAreaInsets();

  const router = useRouter();

  return (
    <View
      style={{
        paddingTop: top + 16,
      }}
      className="bg-background px-4 pb-4"
    >
      <View className="flex-row items-center justify-between">
        <Pressable
          onPress={() => router.back()}
          className="h-9 w-9 items-center justify-center rounded-full border border-[#E5E6E8]"
        >
          <Icons.CaretIcon />
        </Pressable>
        {right && right}
      </View>
      {showTitle && (
        <View className="mt-4">
          <Text className="font-SfPro text-sm font-semibold leading-6 tracking-wider text-body-text">
            {options.title}
          </Text>
        </View>
      )}
      {bottom && bottom}
    </View>
  );
};

export default Header;
