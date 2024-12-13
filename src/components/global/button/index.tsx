import React, { useEffect } from 'react';
import { LogBox, Platform, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { cn } from '../../../core/utils';
import LoadingModal from '../loading-modal';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'plain';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onPress?: () => void;
  disabled?: boolean;
  icon?: JSX.Element;
  iconLeft?: JSX.Element;
  isLoading?: boolean;
  children?: string | string[];
  ButtonTextStyle?: string;
};

const Button = ({
  isLoading = false,
  variant = 'primary',
  className,
  ButtonTextStyle,
  size = 'md',
  onPress,
  disabled = false,
  icon,
  iconLeft,
  children,
}: ButtonProps) => {
  const getButtonStyle = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-[#16783A]';
      case 'secondary':
        return 'bg-white';
      case 'outline':
        return 'bg-transparent border border-white';
      case 'plain':
        return 'bg-transparent';
      default:
        return 'bg-white';
    }
  };

  const getButtonTextStyle = (): string => {
    switch (variant) {
      case 'primary':
        return 'text-white';
      case 'secondary':
        return 'text-black';
      case 'outline':
        return 'text-white';
      case 'plain':
        return 'text-black';
      default:
        return 'text-black';
    }
  };

  const getButtonSize = (): string => {
    switch (size) {
      case 'sm':
        return 'py-2 px-2 rounded h-[42] rounded-full';
      case 'md':
        return 'py-4 px-5 h-[50] rounded-full';
      case 'lg':
        return 'py-6 px-6 rounded-full';
      default:
        return 'py-4 px-5 rounded-full';
    }
  };

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <>
      <TouchableRipple
        onPress={onPress}
        rippleColor="rgba(0, 0, 0, .22)"
        className={cn(
          'w-full transition-all mx-auto flex flex-row items-center justify-center',
          getButtonSize(),
          getButtonStyle(),
          className,
          {
            'opacity-50': disabled,
            'bg-[#C6C6C6]': disabled,
          }
        )}
        disabled={isLoading || disabled}
      >
        <View className="flex flex-row items-center justify-center gap-x-2">
          {icon && icon}
          <Text
            className={cn(
              'text-center text-base leading-4 tracking-wider font-SfPro font-semibold',
              {
                ' h-full': Platform.OS === 'ios',
              },
              getButtonTextStyle(),
              ButtonTextStyle
            )}
          >
            {children}
          </Text>
          {iconLeft && iconLeft}
        </View>
      </TouchableRipple>
      <LoadingModal isVisible={isLoading} />
    </>
  );
};

export default Button;
