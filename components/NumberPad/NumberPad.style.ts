import { COLORS, FONT, SIZES } from "@/constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  padContainer: {
    backgroundColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
    margin: SIZES.small,
    borderRadius: SIZES.radius.large,
    borderColor: "transparent",
  },
  padText: {
    color: "#3F1D38",
  },
}
)

export default styles