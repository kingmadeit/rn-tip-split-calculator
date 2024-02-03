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
    flex: 3,
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
    paddingBottom: SIZES.medium,
    // backgroundColor: COLORS.secondary,
    alignItems: 'center',
    borderRadius: 20,
  },
  foot: {
    flex: 0.7,
    backgroundColor: 'pink',
    width: '100%'
  },
  introText: {
    color: '#fefefe',
    fontFamily: FONT.medium,
    fontSize: SIZES.xxLargeFont
  },
});

export default styles