import type {
  BottomSheetBackdropProps,
  BottomSheetFooterProps,
} from '@gorhom/bottom-sheet';
import {
  BottomSheetBackdrop,
  BottomSheetHandle,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import type { FC } from 'react';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cn } from '@/core';

import Icons from '../icons';

type Props = {
  show: boolean;
  children?: React.ReactNode;
  title?: string;
  titleCenter?: boolean;
  onRequestClose?: () => void;
  snapPoints?: string[];
  enableDynamicSizing?: boolean;
  showCloseIcon?: boolean;
  enablePanDownToClose?: boolean;
  footerComponent?: FC<BottomSheetFooterProps>;
};

const BottomSheet = ({
  show = false,
  children,
  title = '',
  titleCenter = true,
  onRequestClose,
  snapPoints = [],
  enableDynamicSizing = true,
  showCloseIcon = true,
  enablePanDownToClose = true,
  footerComponent,
  ...rest
}: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const _snapPoints = useMemo(() => snapPoints, [snapPoints]);

  useEffect(() => {
    if (show) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [show]);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index < 0) {
        onRequestClose && onRequestClose();
      }
    },
    [onRequestClose]
  );

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior={enablePanDownToClose ? 'close' : 'none'}
        {...props}
      />
    ),
    [enablePanDownToClose]
  );

  const { bottom } = useSafeAreaInsets();

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      enableDynamicSizing={enableDynamicSizing}
      snapPoints={_snapPoints}
      keyboardBlurBehavior="restore"
      enablePanDownToClose={enablePanDownToClose}
      backgroundStyle={styles.bottomSheet}
      onChange={handleSheetChanges}
      handleComponent={enablePanDownToClose ? BottomSheetHandle : null}
      enableHandlePanningGesture={enablePanDownToClose}
      backdropComponent={renderBackdrop}
      footerComponent={footerComponent}
      {...rest}
    >
      <BottomSheetView>
        {showCloseIcon && (
          <Pressable
            onPress={() => {
              onRequestClose && onRequestClose();
            }}
            className="flex-row justify-end px-4"
          >
            <View className="rounded-full border border-stroke p-1">
              <Icons.CloseIcon />
            </View>
          </Pressable>
        )}
        {title && (
          <Text
            className={cn(
              'flex-row justify-end px-4 text-xl font-SfPro font-semibold text-body-01 mb-4',
              {
                'text-center': titleCenter,
              }
            )}
          >
            {title}
          </Text>
        )}
        <View style={{ marginBottom: bottom }} className="px-4">
          {children}
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    borderTopEndRadius: 20,
    padding: 24,
    backgroundColor: '#FDFFFC',
    flex: 1,
    height: '100%',
  },
});
