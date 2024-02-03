const COLORS = {
  primary: "#281734",
  secondary: "#18011f",
  tertiary: "#a31242",
  tertiary_: "#FF7754",
  
  gray: "#83829A",
  gray2: "#C1C0C8",
  darkGray: '#626163',
  darkestGray: '##3a393b',
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  purplish: '#a64dab'

};

const FONT = {
  regular: "PoppinsRegular",
  medium: "PoppinsMedium",
  bold: "PoppinsBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,

  xxLargeFont: 70
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
