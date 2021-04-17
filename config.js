import { RFValue } from "react-native-responsive-fontsize";

export default {
  //API: "http://10.0.2.2:3000",
  //API: "https://ronchon-moliere-23177.herokuapp.com",
  colors: {
    darkPurple: "#191A2D",
    mediumPurple: "#1E1F35",
    lightPurple: "#303255",
    pink: "#B663BD",
    white: "#FFFFFF",
    gradient: "linear-gradient(180deg, #8A28D4 0%, #EC807A 100%)",
  },
};

export const rfvalue = (val) => RFValue(val, 812);
