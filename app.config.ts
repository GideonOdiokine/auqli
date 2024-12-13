/* eslint-disable max-lines-per-function */
import type { ConfigContext, ExpoConfig } from '@expo/config';

import { ClientEnv, Env } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  scheme: Env.SCHEME,
  slug: 'auqli-store',
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#2FB01A',
  },
  androidNavigationBar: {
    backgroundColor: '#2FB01A',
  },
  updates: {
    url: 'https://u.expo.dev/' + Env.EAS_PROJECT_ID,
    fallbackToCacheTimeout: 0,
  },
  runtimeVersion: '1.0.0',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
  },
  experiments: {
    typedRoutes: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#2FB01A',
    },
    softwareKeyboardLayoutMode: 'pan',
    package: Env.PACKAGE,
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins: [
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/SF-Pro-Rounded-Bold.otf',
          './assets/fonts/SF-Pro-Rounded-Light.otf',
          './assets/fonts/SF-Pro-Rounded-Medium.otf',
          './assets/fonts/SF-Pro-Rounded-Regular.otf',
          './assets/fonts/SF-Pro-Rounded-Semibold.otf',
          './assets/fonts/SF-Pro-Rounded-Thin.otf',
        ],
      },
    ],
    'expo-localization',
    'expo-router',
    [
      'expo-local-authentication',
      {
        faceIDPermission: 'Allow $(PRODUCT_NAME) to use Face ID.',
      },
    ],
    [
      '@intercom/intercom-react-native',
      {
        appId: Env.INTERCOM_APP_ID,
        androidApiKey: Env.INTERCOM_ANDROID_API_KEY,
        iosApiKey: Env.INTERCOM_IOS_API_KEY,
      },
    ],
    [
      'expo-build-properties',
      {
        android: {
          kotlinVersion: '1.7.22', // this is for softinput package
        },
        ios: {
          deploymentTarget: '15.0',
        },
      },
    ],
    [
      'app-icon-badge',
      {
        enabled: Env.APP_ENV !== 'production',
        badges: [
          {
            text: Env.APP_ENV,
            type: 'banner',
            color: 'white',
          },
          {
            text: Env.VERSION.toString(),
            type: 'ribbon',
            color: 'white',
          },
        ],
      },
    ],
  ],
  extra: {
    ...ClientEnv,
    eas: {
      projectId: Env.EAS_PROJECT_ID,
    },
  },
});
