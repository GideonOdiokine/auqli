/* eslint-disable react/no-unstable-nested-components */
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import TabBar from '@/components/tab-bar';
import type { RootState } from '@/store';
import { colors } from '@/ui';

export default function TabLayout() {
  const status = useSelector((state: RootState) => state.authState.status);

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      hideSplash();
    }, 1000);
  }, [hideSplash, status]);

  if (status === 'signOut') {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: colors.background,
      }}
      screenOptions={{
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="services/index"
        options={{
          title: 'OUR SERVICES',
          tabBarLabel: 'Services',
        }}
      />
      <Tabs.Screen
        name="my-utilities/(tabs)"
        options={{
          title: 'My Utilities',
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}
