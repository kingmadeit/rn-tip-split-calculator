import { COLORS, FONT, SIZES } from "@/constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  tabs: {
    // flex: .8,
    width: '100%',
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.medium,
    alignContent: 'center',
    alignItems: 'center',
  },
  tab: {
    paddingVertical: SIZES.small / 3,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    // ...SHADOWS.medium,
    shadowColor: COLORS.white,
    borderColor: COLORS.primary
  },
  tabText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium
  },
})

export default styles