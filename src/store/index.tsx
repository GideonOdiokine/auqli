import { configureStore } from '@reduxjs/toolkit';

import { auth } from '@/services/auth';
import { notifications } from '@/services/notifications';
import { services } from '@/services/services';
import { transactions } from '@/services/transactions';
import { wallet } from '@/services/wallet';

import authStateReducer from './features/auth/authSlice';
import walletReducer from './features/wallet/wallet-slice';
import { rtkQueryErrorLogger } from './middlewares';

export const store = configureStore({
  reducer: {
    authState: authStateReducer,
    [auth.reducerPath]: auth.reducer,
    [notifications.reducerPath]: notifications.reducer,
    [transactions.reducerPath]: transactions.reducer,
    [services.reducerPath]: services.reducer,
    [wallet.reducerPath]: wallet.reducer,
    _wallet: walletReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      auth.middleware,
      notifications.middleware,
      transactions.middleware,
      services.middleware,
      wallet.middleware,
      rtkQueryErrorLogger
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
