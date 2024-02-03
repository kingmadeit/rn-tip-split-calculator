import { View, Text, SafeAreaView, ScrollView, TextInput, FlatList, TouchableOpacity  } from 'react-native';
import styles from './Home.style';
import { COLORS } from '@/constants';
import { SetStateAction, useMemo, useRef, useState } from 'react';
import { CustomBottomSheet, CustomPicker, Footer, Tabs } from 'components';
import { CalculatorType, CustomPickerProps } from '@/types';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const Home = () => {
  const calculatorTypes: CalculatorType[] = ['tip', 'split'];
  const people = useMemo(() => [ ...Array(50).keys() ].map( i => `${i+1}`), []);
  const defaultTips = useMemo(() => ['5', '10', '12', '14', '15', '18', '20', '25', '30', '35', '40', '45', '50'], []);
  const [activeTab, setActiveTab] = useState<CalculatorType>(calculatorTypes[0])
  const [amount, setAmount] = useState<string>('0');
  const [tip, setTip] = useState<string>(defaultTips[4]);
  const [party, setParty] = useState<string>(people[2]);
  
  const pickerData: CustomPickerProps = {
    pickers: [
      {
        data: defaultTips, 
        icon: 'percentage',
        active: tip,
        onValueChange: (value: string) => setTip(value)
      },
      {
        data: people, 
        active: party,
        icon: 'arrows-down-to-people', 
        onValueChange: (value: string) => setParty(value)
      }
    ]
  };

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const calculate = () => {
    bottomSheetRef.current?.present()
  }
  return (
    <>
    <SafeAreaView style={{flex: 0, backgroundColor: COLORS.secondary}}/>
    <SafeAreaView style={styles.container}>

      <View style={styles.contentWrapper}>
        {/* ***************************** intro ***************************** */}
        <View style={styles.intro}>
          <Text style={styles.introText}>${amount}</Text>
          {/* ........................... tabs */}
          <Tabs 
            tabs={calculatorTypes} 
            setActiveTab={setActiveTab} 
            activeTab={activeTab}
          />
        </View>

        {/* ***************************** main ***************************** */}
        <View style={styles.main}>
          {/* ***************************** tip picker ***************************** */}
          <CustomPicker pickers={pickerData.pickers} />
        </View>
        {/* ***************************** foot ***************************** */}
        <Footer handleCalculation={calculate}/>
      </View>


    </SafeAreaView>
      {/* ***************************** bottom sheet ***************************** */}
      <CustomBottomSheet ref={bottomSheetRef}/>
    </>
    
  )
}

export default Home