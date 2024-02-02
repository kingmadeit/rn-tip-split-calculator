import { COLORS, FONT, SHADOWS, SIZES } from "@/constants";
import { StyleSheet, ViewStyle } from "react-native"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentWrapper: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
  intro: {
    flex: 1
  },
  main: {
    flex: 10
  },
  foot: {
    flex: 1
  },
  introText: {
    color: '#fefefe',
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge
  },
  tabs: {
    // flex: .8,
    // height: 50,
    marginTop: SIZES.medium,
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
  },
  tabText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium
  },

  textInputWrapper: {
    // flex: 2
  },

  pickerWrapper: {
    // flex: 1,
    backgroundColor: 'gray'
  }
});

export default styles