import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import styles from './NumberPad.style'
import { COLORS, SIZES } from 'constants/theme'
import { useRef } from 'react';
import { Feather } from "@expo/vector-icons";
import { NumberPadProps } from '@/types';

const maxCount = 5;

const NumberPad = ({ amount, setAmount}: NumberPadProps) => {
  const padItems = useRef([1, 2, 3, 4,5,6,7,8,9,'.','0', '<']);
  const { width, height } = Dimensions.get("window");
  const padSize = useRef<number>(width * 0.17);
  const padTextSize = useRef<number>(padSize.current * 0.4);
  const handlePress = (item: string | number) => {
    console.log(item, amount)
    if(amount.length === 1 && item === '0') return;
    else if (item === "<") {
      setAmount((prev) => {
        if(amount.length === 1 && amount !== '0')  return '0';
        return amount.length > 1 && amount !== '0' ? prev.slice(0, -1) : amount;
      })
    }  else {
      console.log(amount)
      if (`${amount}`.length === 5) return console.log('reached limit')
      setAmount((prev) => amount.length === 1 && amount === '0' ? `${item}` : `${prev}${item}`);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={padItems.current}
        numColumns={3} 
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View
                style={[
                  {
                    width: padSize.current,
                    height: padSize.current,
                  },
                  styles.padContainer,
                ]}
              >
                {item === "<" ? (
                  <Feather name="delete" size={24} color="#3F1D38" />
                ) : (
                  <Text
                    style={[{ fontSize: padTextSize.current }, styles.padText]}
                  >
                    {item}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        }}        
      />
    </View>
  )
}

export default NumberPad