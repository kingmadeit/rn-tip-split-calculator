import { View, Text, SafeAreaView, ScrollView, TextInput, FlatList, TouchableOpacity  } from 'react-native';
import styles from './Home.style';
import { Picker } from 'react-native-wheel-pick';
import { COLORS, SIZES } from '@/constants';
import { useState } from 'react';

type CalculatorType = 'tip' | 'split';

const Home = () => {
  const calculatorTypes: CalculatorType[] = ['tip', 'split'];
  const [activeTab, setActiveTab] = useState<CalculatorType>(calculatorTypes[0])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* ***************************** intro ***************************** */}
        <View style={styles.intro}>
          <Text style={styles.introText}>Let's break it down</Text>
        </View>

        {/* ***************************** main ***************************** */}
        <View style={styles.main}>
          {/* ***************************** tabs ***************************** */}
          <View style={styles.tabs}>
            <FlatList 
              data={calculatorTypes}
              renderItem={({item: tab}) => (
                <TouchableOpacity 
                  style={{
                    ...styles.tab, 
                    borderColor: activeTab === tab ? COLORS.secondary : '#5d5c5e',
                    backgroundColor: activeTab === tab ? COLORS.btn : 'transparent',
                  }}
                >
                  <Text style={{
                    ...styles.tabText, 
                    color: activeTab === tab ? COLORS.white : COLORS.darkGray
                    }}>
                      {tab}
                    </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item: string) => item}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{columnGap: SIZES.medium }}
              horizontal
            />
          </View>
          {/* ***************************** amount input ***************************** */}
          <View style={styles.textInputWrapper}>
            <TextInput 
              placeholder='$100.00'
            />
          </View>
          {/* ***************************** tip picker ***************************** */}
          <View style={styles.pickerWrapper}>
            <Picker
              style={{ backgroundColor: 'transparent', flex: 1 , height: 215 }}
              selectedValue='item4'
              pickerData={['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']}
              onValueChange={(value: string) => { console.log(value) }}
            />
          </View>
        </View>
        {/* ***************************** foot ***************************** */}
        <View style={styles.foot}>
           {/* ***************************** calculate ***************************** */}
          <TouchableOpacity>
            <Text>Calculate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home


// <SafeAreaView style={styles.container}>
// <ScrollView contentContainerStyle={styles.scrollContent} >
//   {/* ***************************** intro ***************************** */}
//   <View style={styles.introTextWrapper}>
//     <Text style={styles.introText}>Let's break it down</Text>
//   </View>
//   {/* ***************************** tabs ***************************** */}
//   <View style={styles.tabsWrapper}>
//     <FlatList 
//       data={calculatorTypes}
//       renderItem={({item: tab}) => (
//         <TouchableOpacity 
//           style={{
//             ...styles.tab, 
//             borderColor: activeTab === tab ? COLORS.secondary : '#5d5c5e',
//             backgroundColor: activeTab === tab ? COLORS.btn : 'transparent',
//           }}
//         >
//           <Text style={{
//             ...styles.tabText, 
//             color: activeTab === tab ? COLORS.white : COLORS.darkGray
//             }}>
//               {tab}
//             </Text>
//         </TouchableOpacity>
//       )}
//       keyExtractor={(item: string) => item}
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={{columnGap: SIZES.medium }}
//       horizontal
//     />
//   </View>
//   {/* ***************************** amount input ***************************** */}
//   <View style={styles.textInputWrapper}>
//     <TextInput 
//       placeholder='$100.00'
//     />
//   </View>
//   {/* ***************************** tip picker ***************************** */}
//   <View style={styles.pickerWrapper}>
//     <Picker
//       style={{ backgroundColor: 'transparent', flex: 1 , height: 215 }}
//       selectedValue='item4'
//       pickerData={['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']}
//       onValueChange={(value: string) => { console.log(value) }}
//     />
//   </View>
// </ScrollView>
// <TouchableOpacity>
//   <Text>Calculate</Text>
// </TouchableOpacity>
// </SafeAreaView>