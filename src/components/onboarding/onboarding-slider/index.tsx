import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

import Button from '@/components/global/button';
import Icons from '@/components/global/icons';
import { onBoardingData } from '@/data/providers';

const OnboardingSlider = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onBoardingData.length - 1;

  return (
    <SafeAreaView className="h-full flex-1  bg-black">
      <TouchableOpacity
        onPress={() => {
          router.push('/(auth)/login');
        }}
        className="flex w-full items-end justify-end p-5"
      >
        <Text
          className="font-JakartaBold pr-2 text-sm text-[#CCCCCC]"
          style={{ opacity: isLastSlide ? 0 : 1 }}
        >
          Skip
        </Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="mx-1 h-[9.98px] w-[9.98px] rounded-full bg-[#E8E8E8]" />
        }
        paginationStyle={{ bottom: 40 }}
        activeDot={
          <View className="mx-1 h-[9.98px] w-[39.91px] rounded-full bg-[#CCCCCC]" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onBoardingData.map((item) => (
          <View key={item.id} className="flex items-center justify-center">
            <Image
              source={item.image}
              className="h-[388px] w-[321px]  rounded-[10px]"
              contentFit="cover"
            />
            <View className="mt-[21px] flex w-full flex-row items-center justify-center">
              <Text className="mx-10 text-center text-2xl font-bold text-[#CCCCCC]">
                {item.title}
              </Text>
            </View>
            <Text className="mx-14 mt-3 text-center text-sm font-light text-[#F2F2F2]">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      {!isLastSlide && (
        <Button
          onPress={() => swiperRef.current?.scrollBy(1)}
          className="mb-20 mt-1 w-9/12"
          variant="plain"
          iconLeft={<Icons.ArrowBtnIcon />}
        />
      )}
      {isLastSlide && (
        <Button
          onPress={() => router.push('/(auth)/create-account')}
          className="mb-20 mt-1 w-9/12"
        >
          Get Started
        </Button>
      )}
    </SafeAreaView>
  );
};

export default OnboardingSlider;
