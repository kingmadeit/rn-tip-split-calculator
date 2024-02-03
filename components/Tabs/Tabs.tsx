import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './Tabs.style'
import { COLORS, SIZES } from '@/constants'
import { CalculatorType, TabsProp } from '@/types'


const Tabs = ({tabs, activeTab, setActiveTab}: TabsProp) => {
  return (
    <View style={styles.tabs}>
      <FlatList 
        data={tabs}
        renderItem={({item: tab}) => (
          <TouchableOpacity 
            style={{
              ...styles.tab, 
              borderColor: activeTab === tab ? COLORS.secondary : '#5d5c5e',
              backgroundColor: activeTab === tab ? COLORS.tertiary : 'transparent',
            }}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={{
              ...styles.tabText, 
              color: activeTab === tab ? COLORS.white : COLORS.darkGray
              }}>
                {tab}
              </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item: CalculatorType) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{columnGap: SIZES.medium }}
        horizontal
      />
    </View>
  )
}

export default Tabs