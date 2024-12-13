import React from 'react';
import { View } from 'react-native';

import Icons from '@/components/global/icons';
import { Image } from '@/ui';

export const serviceProviders = [
  {
    label: 'MTN',
    name: 'MTN',
    value: 'MTN',
    icon: <Icons.MtnIcon width="100%" height="100%" />,
  },
  {
    label: 'MTN Co-Operate Data',
    name: 'MTN-COOPERATE-DATA',
    value: 'MTN',
    icon: <Icons.MtnIcon width="100%" height="100%" />,
  },
  {
    label: 'Airtel',
    name: 'AIRTEL',
    value: 'Airtel',
    icon: <Icons.AirtelIcon width="100%" height="100%" />,
  },
  {
    label: 'Glo',
    name: 'GLO',
    value: 'Glo',
    icon: <Icons.GloIcon width="100%" height="100%" />,
  },
  {
    label: '9Mobile',
    value: '9Mobile',
    name: 'ETISALAT',
    icon: <Icons.NineMobileIcon width="100%" height="100%" />,
  },
];

export const cableProviders = [
  {
    label: 'DSTV',
    value: 'DSTV',
    name: 'DSTV',
    icon: <Icons.DSTVIcon width="100%" height="100%" />,
  },
  {
    label: 'GOTV',
    value: 'GOTV',
    name: 'GOTV',
    icon: <Icons.GOTVIcon width="100%" height="100%" />,
  },
  {
    label: 'Startimes',
    value: 'Startimes',
    name: 'STARTIMES',
    icon: <Icons.StartimesIcon width="100%" height="100%" />,
  },
];

export const electricityProviders = [
  {
    label: 'Abuja Electricity Distribution Company (AEDC)',
    value: 'AEDC',
  },
  {
    label: 'Eko Electricity Distribution Company (EKEDC)',
    value: 'EKEDC',
  },
  {
    label: 'Ibadan Electricity Distribution Company (IBEDC)',
    value: 'IBEDC',
  },
  {
    label: 'Ikeja Electricity Distribution Company (IKEDC)',
    value: 'IKEDC',
  },
  {
    label: 'Jos Electricity Distribution Company (JED)',
    value: 'JED',
  },
  {
    label: 'Kano Electricity Distribution Company (KEDCO)',
    value: 'KEDCO',
  },
  {
    label: 'Kaduna Electricity Distribution Company (KAEDCO)',
    value: 'KAEDCO',
  },
  {
    label: 'Port Harcourt Electricity Distribution Company (PHED)',
    value: 'PHED',
  },
  {
    label: 'Yola Electricity Distribution Company (YEDC)',
    value: 'YEDC',
  },
];

export const states = [
  {
    label: 'Abia',
    value: 'abia',
  },
  {
    label: 'Adamawa',
    value: 'adamawa',
  },
  {
    label: 'Akwa Ibom',
    value: 'akwa-ibom',
  },
  {
    label: 'Anambra',
    value: 'anambra',
  },
  {
    label: 'Bauchi',
    value: 'bauchi',
  },
  {
    label: 'Bayelsa',
    value: 'bayelsa',
  },
  {
    label: 'Benue',
    value: 'benue',
  },
  {
    label: 'Borno',
    value: 'borno',
  },
  {
    label: 'Cross River',
    value: 'cross-river',
  },
  {
    label: 'Delta',
    value: 'delta',
  },
  {
    label: 'Ebonyi',
    value: 'ebonyi',
  },
  {
    label: 'Edo',
    value: 'edo',
  },
  {
    label: 'Ekiti',
    value: 'ekiti',
  },
  {
    label: 'Enugu',
    value: 'enugu',
  },
  {
    label: 'FCT',
    value: 'fct',
  },
  {
    label: 'Gombe',
    value: 'gombe',
  },
  {
    label: 'Imo',
    value: 'imo',
  },
  {
    label: 'Jigawa',
    value: 'jigawa',
  },
  {
    label: 'Kaduna',
    value: 'kaduna',
  },
  {
    label: 'Kano',
    value: 'kano',
  },
  {
    label: 'Katsina',
    value: 'katsina',
  },
  {
    label: 'Kebbi',
    value: 'kebbi',
  },
  {
    label: 'Kogi',
    value: 'kogi',
  },
  {
    label: 'Kwara',
    value: 'kwara',
  },
  {
    label: 'Lagos',
    value: 'lagos',
  },
  {
    label: 'Nasarawa',
    value: 'nasarawa',
  },
  {
    label: 'Niger',
    value: 'niger',
  },
  {
    label: 'Ogun',
    value: 'ogun',
  },
  {
    label: 'Ondo',
    value: 'ondo',
  },
  {
    label: 'Osun',
    value: 'osun',
  },
  {
    label: 'Oyo',
    value: 'oyo',
  },
  {
    label: 'Plateau',
    value: 'plateau',
  },
  {
    label: 'Rivers',
    value: 'rivers',
  },
  {
    label: 'Sokoto',
    value: 'sokoto',
  },
  {
    label: 'Taraba',
    value: 'taraba',
  },
  {
    label: 'Yobe',
    value: 'yobe',
  },
  {
    label: 'Zamfara',
    value: 'zamfara',
  },
];

export const countries = [
  {
    label: 'Nigeria',
    value: 'nigeria',
    code: 'NG',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/NG/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Ghana',
    value: 'ghana',
    code: 'GH',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/GH/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Kenya',
    value: 'kenya',
    code: 'KE',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/KE/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'South Africa',
    value: 'south-africa',
    code: 'ZA',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/ZA/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'United States',
    value: 'united-states',
    code: 'US',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/US/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'United Kingdom',
    value: 'united-kingdom',
    code: 'GB',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/GB/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Canada',
    value: 'canada',
    code: 'CA',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/CA/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Australia',
    value: 'australia',
    code: 'AU',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/AU/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'India',
    value: 'india',
    code: 'IN',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/IN/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'China',
    value: 'china',
    code: 'CN',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/CN/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Brazil',
    value: 'brazil',
    code: 'BR',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/BR/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Germany',
    value: 'germany',
    code: 'DE',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/DE/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'France',
    value: 'france',
    code: 'FR',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/FR/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Italy',
    value: 'italy',
    code: 'IT',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/IT/flat/64.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Japan',
    value: 'japan',
    code: 'JP',
    icon: (
      <View className="h-full w-full items-center justify-center overflow-hidden rounded-full object-cover">
        <Image
          contentFit="contain"
          className="h-16 w-16 items-center justify-center"
          source={{
            uri: 'https://flagsapi.com/JP/flat/64.png',
          }}
        />
      </View>
    ),
  },
];

export const cards = [
  {
    label: 'Nike sports',
    value: 'nike',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://cdn.wallpapersafari.com/40/7/z9dinr.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Spotify',
    value: 'spotify',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://i.pinimg.com/originals/94/ac/a9/94aca9b1ffb963a97e68ea11bcd188cb.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Apple',
    value: 'apple',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://wallpapercg.com/media/ts_orig/13747.webp',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Amazon',
    value: 'amazon',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Nike sports',
    value: 'nike-2',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://cdn.wallpapersafari.com/40/7/z9dinr.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Spotify',
    value: 'spotify-2',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://i.pinimg.com/originals/94/ac/a9/94aca9b1ffb963a97e68ea11bcd188cb.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Apple',
    value: 'apple-2',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://wallpapercg.com/media/ts_orig/13747.webp',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Amazon',
    value: 'amazon-2',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Nike sports',
    value: 'nike-3',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://cdn.wallpapersafari.com/40/7/z9dinr.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Spotify',
    value: 'spotify-3',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://i.pinimg.com/originals/94/ac/a9/94aca9b1ffb963a97e68ea11bcd188cb.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Apple',
    value: 'apple-3',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://wallpapercg.com/media/ts_orig/13747.webp',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Amazon',
    value: 'amazon-3',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Nike sports',
    value: 'nike-4',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://cdn.wallpapersafari.com/40/7/z9dinr.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Spotify',
    value: 'spotify-4',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://i.pinimg.com/originals/94/ac/a9/94aca9b1ffb963a97e68ea11bcd188cb.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Apple',
    value: 'apple-4',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://wallpapercg.com/media/ts_orig/13747.webp',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Amazon',
    value: 'amazon-4',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Nike sports',
    value: 'nike-5',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://cdn.wallpapersafari.com/40/7/z9dinr.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Spotify',
    value: 'spotify-5',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://i.pinimg.com/originals/94/ac/a9/94aca9b1ffb963a97e68ea11bcd188cb.jpg',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Apple',
    value: 'apple-5',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://wallpapercg.com/media/ts_orig/13747.webp',
          }}
        />
      </View>
    ),
  },
  {
    label: 'Amazon',
    value: 'amazon-5',
    icon: (
      <View className="h-[60] w-full flex-1 items-center justify-center overflow-hidden rounded">
        <Image
          contentFit="cover"
          className="h-full w-full items-center justify-center"
          source={{
            uri: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
          }}
        />
      </View>
    ),
  },
];

export const bettingProviders = [
  {
    label: 'Bet9ja',
    value: 'Bet9ja',
  },
  {
    label: 'Sportybet',
    value: 'Sportybet',
  },
  {
    label: 'Betking',
    value: 'Betking',
  },
  {
    label: 'Betway',
    value: 'Betway',
  },
  {
    label: 'NairaBet',
    value: 'NairaBet',
  },
  {
    label: 'Bet365',
    value: 'Bet365',
  },
  {
    label: 'Betfair',
    value: 'Betfair',
  },
  {
    label: 'Betfarm',
    value: 'Betfarm',
  },
  {
    label: 'Betbonanza',
    value: 'Betbonanza',
  },
  {
    label: 'Betwinner',
    value: 'Betwinner',
  },
  {
    label: 'Betway',
    value: 'Betway',
  },
  {
    label: 'Bet9ja',
    value: 'Bet9ja',
  },
  {
    label: 'Sportybet',
    value: 'Sportybet',
  },
  {
    label: 'Betking',
    value: 'Betking',
  },
  {
    label: 'Betway',
    value: 'Betway',
  },
  {
    label: 'NairaBet',
    value: 'NairaBet',
  },
  {
    label: 'Bet365',
    value: 'Bet365',
  },
  {
    label: 'Betfair',
    value: 'Betfair',
  },
  {
    label: 'Betfarm',
    value: 'Betfarm',
  },
  {
    label: 'Betbonanza',
    value: 'Betbonanza',
  },
  {
    label: 'Betwinner',
    value: 'Betwinner',
  },
  {
    label: 'Betway',
    value: 'Betway',
  },
  {
    label: 'Bet9ja',
    value: 'Bet9ja',
  },
  {
    label: 'Sportybet',
    value: 'Sportybet',
  },
  {
    label: 'Betking',
    value: 'Betking',
  },
  {
    label: 'Betway',
    value: 'Betway',
  },
  {
    label: 'NairaBet',
    value: 'NairaBet',
  },
  {
    label: 'Bet365',
    value: 'Bet365',
  },
];

export const eSimPackages = [
  {
    label:
      'eSim, 1GB, 7 Days, United States of America, Unthrottled @ N5,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 2GB, 14 Days, United Kingdom, Unthrottled @ N10,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 3GB, 30 Days, Canada, Unthrottled @ N15,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 4GB, 30 Days, Australia, Unthrottled @ N20,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 5GB, 30 Days, Germany, Unthrottled @ N25,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 6GB, 30 Days, France, Unthrottled @ N30,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 7GB, 30 Days, Italy, Unthrottled @ N35,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 8GB, 30 Days, Japan, Unthrottled @ N40,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 9GB, 30 Days, China, Unthrottled @ N45,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 10GB, 30 Days, Brazil, Unthrottled @ N50,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 11GB, 30 Days, Germany, Unthrottled @ N55,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 12GB, 30 Days, France, Unthrottled @ N60,000.00',
    value: 'ESIM',
  },
  {
    label: 'eSim, 13GB, 30 Days, Italy, Unthrottled @ N65,000.00',
    value: 'ESIM',
  },
];

export const onBoardingData = [
  {
    id: '1',
    title: 'Auqli',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: require('assets/images/onboarding-slider.jpeg'),
  },
  {
    id: '2',
    title: 'Auqli',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: require('assets/images/onboarding-slider1.jpeg'),
  },
  {
    id: '3',
    title: 'Auqli',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: require('assets/images/onboarding-slider2.jpeg'),
  },
];
