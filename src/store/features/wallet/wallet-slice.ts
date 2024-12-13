import { createSlice } from '@reduxjs/toolkit';

import { getShowAmount, setShowAmount } from '../auth/utils';
export interface WalletState {
  showAmount: boolean;
}

const initialState: WalletState = {
  showAmount: !!getShowAmount(),
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setshowAmount: (state) => {
      state.showAmount = !state.showAmount;
      setShowAmount(state.showAmount);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setshowAmount } = walletSlice.actions;

export default walletSlice.reducer;
