import { COLORS, FONT, SIZES } from "@/constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  iconWrapper: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: '53%',
    right: '-15%'
  },
  pickerWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  picker: { 
    backgroundColor: 'transparent', 
    // flex: 1 , 
    height: 70
  }
}
)

export default styles