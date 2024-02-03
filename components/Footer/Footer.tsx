import { Text, TouchableOpacity, View } from 'react-native'
import styles from './Footer.style'

const Footer = ({handleCalculation}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculation}>
        <Text style={styles.calculateBtnText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
