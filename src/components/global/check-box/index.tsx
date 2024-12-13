import CheckBox_ from '@react-native-community/checkbox';
import React, { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';

type CheckBoxProps = {
  label: string;
  name: string;
  required?: boolean;
};

const CheckBox = ({ label, name, required = false }: CheckBoxProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  // const width = Dimensions.get('window')?.width - 100;

  const { field } = useController({
    name,
  });

  useEffect(() => {
    setToggleCheckBox(field.value);
  }, [field.value]);

  const methods = useFormContext();

  useEffect(() => {
    methods.register(name, { required });
  }, [methods, name, required]);

  return (
    <View className="flex-row gap-x-4">
      <CheckBox_
        style={styles.checkbox}
        tintColors={{ true: '#888787', false: '#888787' }}
        tintColor="white"
        onTintColor="white"
        onFillColor="white"
        onCheckColor="white"
        boxType="square"
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => {
          setToggleCheckBox(newValue);
          methods.setValue(name, newValue, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
      />
      <Text className="font-Montserrat text-sm text-[#888787]">{label}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
  },
});
