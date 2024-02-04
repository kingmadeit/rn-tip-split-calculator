import { View, Text } from 'react-native'
import styles from './TipResults.style'
import { ResultProps, TTipResult } from '@/types'

const TipResults = ({results}: ResultProps) => {
  console.log(results)
  debugger
  return (
    <View style={styles.container}>
      {(results as TTipResult[])?.map((result: TTipResult, i: number) => (
        <Text key={result.tip} style={{color: 'white'}}>{result.tip} | { result.amount}</Text>
      ))}
    </View>
  )
}

export default TipResults