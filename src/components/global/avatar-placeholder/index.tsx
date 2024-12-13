import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { cn } from '@/core';
import type { RootState } from '@/store';

type AvatarPlaceholderProps = {
  className?: string;
};

const AvatarPlaceholder = ({ className }: AvatarPlaceholderProps) => {
  const data = useSelector((state: RootState) => state.authState.user);

  return (
    <View
      className={cn(
        'w-[72] h-[72] rounded-full bg-primary justify-center items-center',
        className
      )}
    >
      <Text className="font-SfPro text-2xl font-bold tracking-widest text-white">
        {data?.firstName[0]}
        {data?.lastName[0]}
      </Text>
    </View>
  );
};

export default AvatarPlaceholder;
