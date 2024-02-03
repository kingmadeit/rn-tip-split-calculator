import { View, Text, SafeAreaView, ScrollView, TextInput, FlatList, TouchableOpacity  } from 'react-native';
import styles from './Home.style';
import { Picker } from 'react-native-wheel-pick';
import { COLORS, SIZES } from '@/constants';
import { useState } from 'react';
import { Footer, Tabs } from 'components';
import { CalculatorType } from '@/types';

const Home = () => {
  const calculatorTypes: CalculatorType[] = ['tip', 'split'];
  const [activeTab, setActiveTab] = useState<CalculatorType>(calculatorTypes[0])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* ***************************** intro ***************************** */}
        <View style={styles.intro}>
          <Text style={styles.introText}>Let's break it down</Text>
          {/* ........................... tabs */}
          <Tabs tabs={calculatorTypes} setActiveTab={setActiveTab} activeTab={activeTab}/>
        </View>

        {/* ***************************** main ***************************** */}
        <View style={styles.main}>
          {/* ***************************** amount input ***************************** */}
          <View style={styles.textInputWrapper}>
            <TextInput 
              keyboardType={'phone-pad'} 
              onChangeText={
                  (number) => console.log(number)
              } 
              value={''} 
              maxLength={5}
              returnKeyType='go'
              placeholder='$100.00'
              placeholderTextColor={COLORS.gray2}
              style={styles.input}
            />
          </View>
          {/* ***************************** tip picker ***************************** */}
          <View style={styles.pickerWrapper}>
            <Picker
              style={{ backgroundColor: 'transparent', flex: 1 , height: 215 }}
              selectedValue='item4'
              textColor={COLORS.gray}
              textSize={20}
              selectTextColor="#a64dab"
              selectBackgroundColor={COLORS.tertiary}
              isShowSelectBackground={true}
              isShowSelectLine={false}
              selectLineColor={'grey'}
              // selectLineSize={9}
              pickerData={['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']}
              onValueChange={(value: string) => { console.log(value) }}
            />
          </View>
        </View>
        {/* ***************************** foot ***************************** */}
        <Footer/>
      </View>
    </SafeAreaView>
  )
}

export default Home