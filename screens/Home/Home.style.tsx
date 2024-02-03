import { COLORS, FONT, SHADOWS, SIZES } from "@/constants";
import { StyleSheet, ViewStyle } from "react-native"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  intro: {
    flex: 4,
    width: '100%',
    backgroundColor: COLORS.secondary,
    // opacity: 0.3
    borderBottomColor: COLORS.gray,
    borderBottomLeftRadius: SIZES.radius.larger,
    borderBottomRightRadius: SIZES.radius.larger,
    justifyContent: 'center',
    alignItems: 'center'
    // borderBottomRightRadius: SIZES.xxLarge,
  },
  main: {
    flex: 8,
    padding: 16,
    backgroundColor: COLORS.primary,
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
    fontFamily: FONT.medium,
    fontSize: SIZES.xxLargeFont
  },
});

export default styles