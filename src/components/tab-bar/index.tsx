/* eslint-disable max-lines-per-function */
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icons from '@/components/global/icons';
import { cn } from '@/core';
import { colors } from '@/ui';

import { TabBarItem } from './tab-bar-item';

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={{ paddingBottom: bottom || 16 }}
      className={cn(
        'w-full flex-row items-center justify-around border-t border-stroke bg-white px-6 py-4'
      )}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconMap = {
          index: (
            <Icons.HomeIcon
              height={isFocused ? 22 : 16}
              fill={isFocused ? colors.primary : colors.grey[200]}
            />
          ),
          'services/index': (
            <Icons.ServicesIcon
              height={isFocused ? 22 : 16}
              fill={isFocused ? colors.primary : colors.grey[200]}
            />
          ),
          'my-utilities/(tabs)': (
            <Icons.UtilitiesIcon
              height={isFocused ? 22 : 16}
              fill={isFocused ? colors.primary : colors.grey[200]}
            />
          ),
          'settings/index': (
            <Icons.SettingsIcon
              height={isFocused ? 22 : 16}
              fill={isFocused ? colors.primary : colors.grey[200]}
            />
          ),
        } as Record<string, React.ReactNode>;

        return (
          <TabBarItem
            key={route.key}
            route={route}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label.toString()}
            iconMap={iconMap}
            options={options}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
