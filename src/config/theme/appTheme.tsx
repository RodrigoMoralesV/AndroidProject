import { StyleSheet } from "react-native";

// Colores de la app
export const colors = {
  primary1: '#17161c',
  primary2: '#dddde0',
  text1: '#a0a0a4',
  text2: '#686b6e',
}

// Colores del texto
export const textColors = {
  textGray: colors.text1,
  textGray2: colors.text2,
  textWhite: colors.primary2,
}

// Fuentes del texto
export const fontSizes = {
  textS: 14,
  textM: 16,
  textL: 18,
  textXL: 22,
  textXXL: 26,
}

// Color y fuenta del texto por defecto para el componente StyledText
export const styledFallBack = StyleSheet.create({
  text: {
    fontSize: fontSizes.textL,
    color: textColors.textWhite
  }
})

// Colores del texto para el componente StyledText
export const styledTextColors = StyleSheet.create({
  textGray: { color: textColors.textGray },
  textGray2: { color: textColors.textGray2 },
  textWhite: { color: textColors.textWhite },
})

// Fuentes del texto para el componente StyledText
export const styledFontSizes = StyleSheet.create({
  textS: { fontSize: fontSizes.textS },
  textM: { fontSize: fontSizes.textM },
  textL: { fontSize: fontSizes.textL },
  textXL: { fontSize: fontSizes.textXL },
  textXXL: { fontSize: fontSizes.textXXL },
})

// Justificacion del texto para el componente StyledText
export const styledTextJustified = StyleSheet.create({
  textCenter: { textAlign: "center" },
  textJustify: { textAlign: "justify" },
  textLeft: { textAlign: "left" },
  textRight: { textAlign: "right" },
})

export const styledFontWeight = StyleSheet.create({
  bold: { fontWeight: "bold" },
})