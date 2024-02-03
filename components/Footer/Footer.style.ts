import { COLORS, FONT, SHADOWS, SIZES } from "@/constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  footer: {
    // flex: 1,
    paddingLeft: SIZES.medium,
    paddingRight: SIZES.medium,
    flex: 0.8,
    // backgroundColor: 'pink',
    width: '100%'
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