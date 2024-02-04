import { View, Text, Button } from 'react-native'
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import styles from './CustomBottomSheet.style'
import { forwardRef, useCallback, useMemo, useRef } from 'react';
import { COLORS, SIZES } from 'constants/theme';
import { TipResults, SplitResults, NoResults } from 'components';
import { ETabs, TTipResult } from '@/types';

export type Ref = BottomSheetModal;
export type Results = {
  amountEntered: string,
  selectedTip?: string,
  selectedParty?: string
  amountCalculated: number | {tip: string, amount: string}[],
  activeTab: string,
}

const CustomBottomSheet = forwardRef<Ref, Results>(({amountEntered, activeTab, amountCalculated}: Results, ref) => {
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

  console.log(activeTab)
  const displayResults = () => {
    if (+amountEntered === 0) return <NoResults />
    
    switch (activeTab) {
      case ETabs.tip: return <TipResults results={(amountCalculated as TTipResult[])}/>
      case ETabs.split: return <SplitResults results={(amountCalculated as number)}/>
      default: break;
    }
  }


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
        { displayResults() }
      </View>
    </BottomSheetModal>

      
  );
})

export default CustomBottomSheet