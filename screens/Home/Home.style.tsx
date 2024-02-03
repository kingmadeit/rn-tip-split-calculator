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
    flex: 2,
    width: '100%',
    // backgroundColor: COLORS.tertiary,
    // opacity: 0.3
    borderBottomColor: COLORS.gray,
  },
  main: {
    flex: 8,
    backgroundColor: COLORS.secondary,
    marginBottom: 20,
    alignContent: 'center',
    borderRadius: 20
    // justifyContent: 'center'
  },
  foot: {
    flex: 1
  },
  introText: {
    color: '#fefefe',
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge
  },

  textInputWrapper: {
    // flex: 5,
    width: '100%',
    backgroundColor: 'transparent',
    marginTop: SIZES.small,
    marginBottom: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: 70,
    color: COLORS.white,
  },

  pickerWrapper: {
    // flex: 1,
    // backgroundColor: 'gray'
  },
  input: {
    fontFamily: FONT.bold,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
    borderBottomColor: COLORS.gray,
    // borderWidth: 1
  }
});

export default styles