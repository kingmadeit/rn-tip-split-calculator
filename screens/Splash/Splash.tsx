import { Text, View, SafeAreaView } from 'react-native'
import styles from './Splash.style'
import LottieView from 'lottie-react-native'
import { splashLoader } from 'assets'

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <LottieView 
        autoPlay
        loop={false}
        style={{flex:1}}
          source={splashLoader}
        />
        <Text>what is happening</Text>
      </View>
    </SafeAreaView>
  )
}

export default Splash
