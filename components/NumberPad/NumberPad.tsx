import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './NumberPad.style'
import { COLORS, SIZES } from 'constants/theme'


const NumberPad = () => {
  const padItems = ['1', '2', '3', '4','5','6','7','8','9','.','0', '<'];

  const handlePress = () => {

  }

  return (
    <View style={{flex: 1}}>
      <FlatList 
        data={padItems}
        renderItem={({item: pad}) => (
          <TouchableOpacity 
            style={{
              backgroundColor: COLORS.gray,
            }}
            onPress={handlePress}
          >
            <Text style={{
              color: COLORS.secondary
              }}>
                {pad}
              </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item: string) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{columnGap: SIZES.medium }}
        horizontal
      />
    </View>
  )
}

export default NumberPad