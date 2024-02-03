import { COLORS, FONT, SHADOWS, SIZES } from "@/constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  foot: {
    flex: 1,
    padding: SIZES.medium
  },
  calculateBtn: {
    flex: 1,
    height: 50,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.large,
    // borderWidth: 1,
    // ...SHADOWS.small,
    shadowColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calculateBtnText: {
    color: COLORS.white,
    fontFamily: FONT.bold

  }
})

export default styles