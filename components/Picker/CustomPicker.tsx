import { View, Text } from 'react-native'
import { Picker } from 'react-native-wheel-pick';

import styles from './CustomPicker.style'
import { COLORS, SIZES } from '@/constants';
import { CustomPickerProps, PickerProps } from '@/types';
import { FontAwesome6 } from '@expo/vector-icons';

const CustomPicker = ({pickers}: CustomPickerProps) => {
  console.log('res')
  const _Picker = ({data, icon, active, onValueChange}: PickerProps) => (
    <View style={styles.pickerWrapper}>
      <FontAwesome6 name={icon} size={24} color={COLORS.gray} />
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
        onValueChange={onValueChange}
      />
    </View>


  )

  return (
    <View style={styles.container}>
      {pickers.map((picker: PickerProps, i: number) => (
        <_Picker 
          key={`${picker.icon}-${i}`} 
          data={picker.data} 
          icon={picker.icon}
          active={picker.active}
          onValueChange={(value: string) => picker.onValueChange(value)} 
        />

      ))}
    </View>
  )
}

export default CustomPicker