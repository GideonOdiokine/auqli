import React from 'react';
import { View } from 'react-native';

import BottomSheet from '../bottom-sheet';
import PINBiometricPad from '../pin-biometric-pad';

type AuthenticatorProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  onSuccessful?: (pin?: string) => void;
};

const Authenticator = ({ show, setShow, onSuccessful }: AuthenticatorProps) => {
  return (
    <BottomSheet
      show={show}
      title="Enter PIN"
      onRequestClose={() => {
        setShow(false);
      }}
    >
      <View className="h-[520] py-6">
        <PINBiometricPad
          onSuccessful={(pin) => {
            setShow(false);
            onSuccessful && onSuccessful(pin);
          }}
        />
      </View>
    </BottomSheet>
  );
};

export default Authenticator;
