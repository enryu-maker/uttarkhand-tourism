export const COLORS = {
    primary:"#FFBD44",
    lightprimary:"#FFEDCC",
    white:"#ffffff",
    black:"#000000",
    lightGray1: "#DDDDDD",
    lightGray2: "#e6e6e6",
    black:"black",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: "#CFD0D7",
    darkGray: "#525C67",
    darkGray2: "#757D85",
}
export const SIZES = {
    base: 8,
    font: 14,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 26,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body19: 19,
    body3: 16,
    body4: 14,
    body5: 12,

    //border radius
    normalRad:12,
    inputRad:24,
    bigRad:42,
    smallRad:30
}
const type = { base: (Platform.OS === "ios" ? "Helvetica Neue" : "monospace"), 
bold: (Platform.OS === "ios" ? "HelveticaNeue-Bold" : "monospace"), 
emphasis: (Platform.OS === "ios" ? "HelveticaNeue-Italic" : "monospace") }
export const FONTS = {
    largeTitle: { fontFamily: type.bold, fontSize: SIZES.largeTitle },
    h1: { fontFamily: type.bold, fontSize: SIZES.h1, lineHeight: 36, fontWeight:'bold'},
    h2: { fontFamily: type.bold, fontSize: SIZES.h2, lineHeight: 30 , fontWeight:'bold'},
    h3: { fontFamily: type.bold, fontSize: SIZES.h3, lineHeight: 22 , fontWeight:'bold'},
    h4: { fontFamily: type.bold, fontSize: SIZES.h4, lineHeight: 20 , fontWeight:'bold'},
    h5: { fontFamily: type.bold, fontSize: SIZES.h5, lineHeight: 18 , fontWeight:'bold'},
    body1: { fontFamily: type.base, fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily:type.base, fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily:type.base, fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily:type.base, fontSize: SIZES.body4, lineHeight: 20 },
    body5: { fontFamily:type.base, fontSize: SIZES.body5, lineHeight: 18 },
};