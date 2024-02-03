import { View, Text, Button } from 'react-native'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import styles from './CustomBottomSheet.style'
import { forwardRef, useCallback, useMemo, useRef } from 'react';
import { COLORS, SIZES } from 'constants/theme';

export type Ref = BottomSheetModal;

const CustomBottomSheet = forwardRef<Ref>((props, ref) => {
  // ref
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '69%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    // bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  console.log(ref)

  // renders
  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      // enableDynamicSizing={true}
      backgroundStyle={{backgroundColor: COLORS.secondary, borderTopRightRadius: SIZES.radius.larger, borderTopLeftRadius: 100}}
      handleIndicatorStyle={{backgroundColor: COLORS.tertiary}}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={{color: 'white'}}>Awesome 🎉</Text>
      </View>
    </BottomSheetModal>

      
  );
})

export default CustomBottomSheet