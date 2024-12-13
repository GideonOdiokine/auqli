/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { cn } from '@/core';
import { toast } from '@/core/toast';
import {
  useDeleteBeneficiariesMutation,
  useDeleteScheduleMutation,
  useGetBeneficiariesQuery,
  useGetScheduledBillsQuery,
} from '@/services/services';

import BottomSheet from '../bottom-sheet';
import Button from '../button';
import Icons from '../icons';

type BeneficiaryProps = {
  icon?: React.ReactNode;
  title: string;
  desc: string;
  id: string;
  scheduleDetails?: string;
};

const Beneficiary = ({
  icon,
  title,
  desc,
  id,
  scheduleDetails,
}: BeneficiaryProps) => {
  const [showDelete, setShowDelete] = useState(false);

  const [deleteBeneficiary, { isLoading }] = useDeleteBeneficiariesMutation();

  const [deleteSchedule, { isLoading: isLoadingDeleteSchedule }] =
    useDeleteScheduleMutation();

  const { refetch } = useGetBeneficiariesQuery();

  const { refetch: refetchSchedules } = useGetScheduledBillsQuery();

  const handleDeleteBeneficiary = async () => {
    try {
      scheduleDetails
        ? await deleteSchedule({ id }).unwrap()
        : await deleteBeneficiary({ id }).unwrap();
      setShowDelete(false);
      scheduleDetails
        ? toast.success('Schedule deleted successfully')
        : toast.success('Beneficiary deleted successfully');
      scheduleDetails ? refetchSchedules() : refetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <View
        className={cn(
          'w-full flex-row items-center justify-between gap-y-2.5 gap-x-2.5'
        )}
      >
        <View className="flex-1 flex-row items-center gap-x-2.5">
          {icon && <View>{icon}</View>}
          <View className="flex-1">
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="mb-1 font-SfPro text-base font-semibold capitalize tracking-wider text-body-text"
            >
              {title}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="font-SfPro text-sm font-normal tracking-wider text-body-02"
            >
              {desc}
            </Text>
            {scheduleDetails && (
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="mt-1 font-SfPro text-sm font-normal capitalize tracking-wider text-body-02"
              >
                {scheduleDetails}
              </Text>
            )}
          </View>
        </View>
        <Pressable
          onPress={() => {
            setShowDelete(true);
          }}
        >
          <Icons.BinIcon className="h-6 w-6" />
        </Pressable>
      </View>
      <BottomSheet
        show={showDelete}
        title=""
        onRequestClose={() => {
          setShowDelete(false);
        }}
        showCloseIcon={true}
      >
        <View className="mb-4">
          <View className="mb-4 items-center justify-center">
            <View className="h-14 w-14 items-center justify-center rounded-full bg-error-50">
              <Icons.ErrorIcon />
            </View>
          </View>
          <Text className="mb-2 text-center font-SfPro text-xl font-semibold tracking-wider text-title">
            Delete {title} as {scheduleDetails ? 'Schedule' : 'Beneficiary'}
          </Text>
          <Text className="text-center font-SfPro text-base tracking-wider text-body-02">
            Do you want to delete this{' '}
            {scheduleDetails ? 'schedule' : 'beneficiary'}?
          </Text>
          <View className="mt-8 gap-y-4">
            <Button onPress={() => setShowDelete(false)}>No, cancel</Button>
            <Button
              isLoading={isLoading || isLoadingDeleteSchedule}
              onPress={handleDeleteBeneficiary}
              ButtonTextStyle="text-error-100"
              className="border border-error-100 bg-transparent"
            >
              Yes, delete
            </Button>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default Beneficiary;
