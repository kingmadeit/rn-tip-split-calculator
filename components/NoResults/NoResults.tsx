import { View, Text } from 'react-native'
import styles from './NoResults.style'
import LottieView from 'lottie-react-native'
import { enterValue } from 'assets'

const NoResults = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter an amount</Text>
      {/* <LottieView 
        autoPlay
        loop={false}
        style={{flex:2}}
        source={enterValue}
      /> */}
    </View>
  )
}

export default NoResults