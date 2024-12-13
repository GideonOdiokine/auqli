import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import OnboardingSlider from '@/components/onboarding/onboarding-slider';
import { FocusAwareStatusBar } from '@/ui';

export default function Onboarding() {
  // const status = useSelector((state: RootState) => state.authState.status);

  // const router = useRouter();

  // const dispatch = useDispatch();

  // if (status === 'signIn') {
  //   return <Redirect href="/" />;
  // }

  return (
    <SafeAreaView className="h-full flex-1 bg-black">
      <FocusAwareStatusBar barStyle="light-content" />
      <OnboardingSlider />
    </SafeAreaView>
  );
}
