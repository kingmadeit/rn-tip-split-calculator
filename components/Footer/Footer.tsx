import { Text, TouchableOpacity, View } from 'react-native'
import styles from './Footer.style'

const Footer = () => {
  return (
    <View style={styles.foot}>
      <TouchableOpacity style={styles.calculateBtn}>
        <Text style={styles.calculateBtnText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
