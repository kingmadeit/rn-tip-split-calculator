import { COLORS, FONT, SIZES } from "@/constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    width: '100%',
    flexDirection: 'row',
    // borderWidth: 1
  },
  pickerWrapper: {
    flex: 1,
    // backgroundColor: 'gray'
    flexDirection: 'column',
  },
  picker: { 
    backgroundColor: 'transparent', 
    // flex: 1 , 
    height: 100
  }
}
)

export default styles