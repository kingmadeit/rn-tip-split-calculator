import { View, Text, SafeAreaView, ScrollView, TextInput, FlatList, TouchableOpacity  } from 'react-native';
import styles from './Home.style';
import { COLORS } from '@/constants';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { CustomBottomSheet, CustomPicker, Footer, NumberPad, Tabs } from 'components';
import { CalculatorType, CustomPickerProps, PickerProps } from '@/types';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ETabs } from '@/types';
const Home = () => {
  const calculatorTypes: CalculatorType[] = ['tip', 'split'];
  const people = useMemo(() => [ ...Array(50).keys() ].map( i => `${i+1}`), []);
  const defaultTips = useMemo(() => ['5', '10', '12', '14', '15', '18', '20', '25', '30', '35', '40', '45', '50'], []);
  const [activeTab, setActiveTab] = useState<CalculatorType>(calculatorTypes[0])
  const [amount, setAmount] = useState<string>('0');
  const [amountCalculated, setAmountCalculated] = useState<number | {tip: string, amount: string}[]>(0);
  const [tip, setTip] = useState<string>(defaultTips[4]);
  const [party, setParty] = useState<string>(people[2]);


  const Picker = memo(({data, icon, active, onValueChange}: PickerProps) => {
    return (
      <CustomPicker 
        data={data} 
        active={active} 
        onValueChange={onValueChange} 
        icon={icon}  
      />
    )
  });

  const pickers = useMemo<PickerProps[]>(() => {
    console.log('im here');
    
    return ([
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
  ])}, [tip, party]);

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const tipsCalculated = useCallback((amount: string)=> {
    console.log('here')
    return defaultTips.map((tip) => ({
      tip, amount: (+amount * (+tip/100)).toFixed(2)
    }
  ))}, [amount]) // this should be in a usecallback

  const calculate = () => {
    if (+amount === 0) return 0;

    switch (activeTab) {
      case ETabs.tip: setAmountCalculated(tipsCalculated(amount)); break;
      case ETabs.split: 
        setAmountCalculated(Math.ceil((+amount + (+amount * (+tip/100))) / +party));
        break;
      default: break;
    }

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
          {/* ***************************** number pad ***************************** */}
          <NumberPad amount={amount} setAmount={setAmount} />
          {/* ***************************** picker list ***************************** */}
          <View style={styles.pickerContainer}>
            { pickers.map((picker, i) => (
              <Picker 
                key={i}            
                icon={picker.icon}
                data={picker.data} 
                active={picker.active} 
                onValueChange={picker.onValueChange}                
              />
            ))}
          </View>
        </View>
        {/* ***************************** foot ***************************** */}
        <Footer handleCalculation={calculate}/>
      </View>


    </SafeAreaView>
      {/* ***************************** bottom sheet ***************************** */}
      <CustomBottomSheet 
        ref={bottomSheetRef}
        amountEntered={amount}
        selectedTip={tip}
        selectedParty={party}
        activeTab={activeTab}
        amountCalculated={amountCalculated}
      />
    </>
    
  )
}

export default Home