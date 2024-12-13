import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { cn } from '@/core';

type TabBarItemProps = {
  route: any;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  iconMap: Record<string, React.ReactNode>;
  options: BottomTabNavigationOptions;
};

export const TabBarItem = ({
  route,
  isFocused,
  onPress,
  onLongPress,
  label,
  iconMap,
  options,
}: TabBarItemProps) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused,
      {
        duration: 350,
      }
    );
  }, [isFocused, scale]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [0, 1]);
    return {
      opacity,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View>
      <Pressable
        key={route.name}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        onPress={onPress}
        onLongPress={onLongPress}
        className={cn(
          'border px-6 gap-x-2 flex-row border-transparent items-center justify-center rounded-full py-2',
          {
            'border-primary px-4 bg-[#F3FEF1]': isFocused,
          }
        )}
      >
        <View>{iconMap[route.name]}</View>
        {isFocused && (
          <Animated.Text
            style={[animatedTextStyle]}
            className={cn(
              'text-sm font-SfPro font-medium leading-7',
              isFocused ? 'text-primary' : 'text-body-02'
            )}
          >
            {label.toString()}
          </Animated.Text>
        )}
      </Pressable>
    </View>
  );
};
