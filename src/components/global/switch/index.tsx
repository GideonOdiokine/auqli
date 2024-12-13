import React, { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Platform, Pressable, Text, View } from 'react-native';
import { Switch as RNPSwitch } from 'react-native-paper';

import { cn } from '@/core';

type SwitchProps = {
  name: string;
  label?: string;
  onValueChange?: (value: boolean) => void;
};

const Switch = ({ label, name, onValueChange }: SwitchProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const { field } = useController({
    name,
  });

  useEffect(() => {
    setIsSwitchOn(field.value);
  }, [field.value]);

  const methods = useFormContext();

  const {} = methods;

  useEffect(() => {
    methods.register(name, {});
  }, [methods, name]);

  const onToggleSwitch = () => {
    onValueChange && onValueChange(!isSwitchOn);
    field.onChange(!isSwitchOn);
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <View className="flex-row items-center">
      <View
        className={cn({
          '-ml-2': Platform.OS === 'ios',
          '-ml-0.5': Platform.OS === 'android',
        })}
      >
        <RNPSwitch
          trackColor={{
            false: '#E7EBE6',
            true: '#2FB01A',
          }}
          ios_backgroundColor={'#E7EBE6'}
          thumbColor={
            Platform.OS === 'android'
              ? '#2FB01A'
              : !isSwitchOn && Platform.OS === 'ios'
              ? '#ffffff'
              : '#ffffff'
          }
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          style={
            Platform.OS === 'ios' && {
              transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
            }
          }
        />
      </View>
      <Pressable
        onPress={() => {
          field.onChange(!isSwitchOn);
          setIsSwitchOn(!isSwitchOn);
        }}
      >
        <Text className="font-SfPro text-sm font-medium tracking-wider text-body-text">
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default Switch;
