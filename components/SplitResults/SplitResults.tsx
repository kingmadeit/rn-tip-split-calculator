import { View, Text } from 'react-native'
import styles from './SplitResults.style'
import { ResultProps } from '@/types'
const SplitResults = ({results}: ResultProps ) => {
  console.log(results)
  debugger
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>{results as number}</Text>
    </View>
  )
}

export default SplitResults