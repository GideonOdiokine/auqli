import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Constants from 'expo-constants';
import { Stack, useNavigationContainerRef } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {
  configureFonts,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { Provider } from 'react-redux';

const fontConfig = {
  fontFamily: 'SfPro',
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...MD3LightTheme.colors,
    primary: '#000000',
    onPrimary: 'rgb(255, 255, 255)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: '#EAEBFD',
    background: 'rgb(255, 255, 255)',
    surface: 'rgb(255, 255, 255)',
  },
};

export { ErrorBoundary } from 'expo-router';

import '../../global.css';

import { UserInactivityProvider } from '@/core/user-inactivity-provider';
import { store } from '@/store';
import { colors } from '@/ui';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen
          name="onboarding/index"
          options={{
            headerShown: false,
            navigationBarColor: colors.background,
          }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(app)/(tabs)"
          options={{
            headerShown: false,
            navigationBarColor: colors.background,
          }}
        />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <UserInactivityProvider>
        <GestureHandlerRootView style={styles.container}>
          <KeyboardProvider>
            <PaperProvider theme={theme}>
              <BottomSheetModalProvider>
                {children}
                <FlashMessage floating style={styles.flashMessage} />
              </BottomSheetModalProvider>
            </PaperProvider>
          </KeyboardProvider>
        </GestureHandlerRootView>
      </UserInactivityProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flashMessage: {
    marginTop: Constants.platform?.android ? Constants.statusBarHeight : 'auto',
  },
});
