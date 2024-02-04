import { View, Text } from 'react-native'
import { Picker } from 'react-native-wheel-pick';

import styles from './CustomPicker.style'
import { COLORS, SIZES } from '@/constants';
import { PickerProps } from '@/types';
import { FontAwesome6 } from '@expo/vector-icons';
import { memo, useCallback } from 'react';

const CustomPicker = ({data, icon, active, onValueChange}: PickerProps) => {
  console.log(`${icon} picker rendered!`)

  const valueChanged = useCallback(onValueChange, []);

  return (
    <View style={styles.pickerWrapper}>
      <View style={styles.iconWrapper}>
        <FontAwesome6 name={icon} size={SIZES.large} color={COLORS.darkGray} />
      </View>
      <Picker
        style={styles.picker}
        selectedValue={active}
        textColor={COLORS.gray}
        textSize={SIZES.medium}
        selectTextColor={COLORS.purplish}
        selectBackgroundColor={COLORS.tertiary}
        isShowSelectBackground={true}
        isShowSelectLine={false}
        selectLineColor={COLORS.gray2}
        pickerData={data}
        onValueChange={valueChanged}
      />
    </View>
  )
}

export default memo(CustomPicker)