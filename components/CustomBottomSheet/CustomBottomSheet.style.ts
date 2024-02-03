import { COLORS, FONT, SHADOWS, SIZES } from "@/constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 1,
    borderRadius: 70,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    padding: SIZES.medium,
    borderRadius: 70

  },
})

export default styles