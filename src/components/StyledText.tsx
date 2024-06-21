import React from 'react'
import { Text } from 'react-native'
import { styledFallBack, styledFontSizes, styledTextColors, styledTextJustified, styledFontWeight } from '../config/theme/appTheme'
import { StyledTextProps } from '../interface/StyledTextProps'

export const StyledText: React.FC<StyledTextProps> = (props) => {
  const textStyle: any = [
    { ...styledFallBack.text },
    props.textGray && styledTextColors.textGray,
    props.textGray2 && styledTextColors.textGray2,
    props.textWhite && styledTextColors.textWhite,
    props.textS && styledFontSizes.textS,
    props.textM && styledFontSizes.textM,
    props.textL && styledFontSizes.textL,
    props.textXL && styledFontSizes.textXL,
    props.textXXL && styledFontSizes.textXXL,
    props.textCenter && styledTextJustified.textCenter,
    props.textJustify && styledTextJustified.textJustify,
    props.textLeft && styledTextJustified.textLeft,
    props.textRight && styledTextJustified.textRight,
    props.textBold && styledFontWeight.bold,
  ]

  return (
    <Text numberOfLines={props.textOverflow} ellipsizeMode='tail' style={textStyle}>{props.children}</Text>
  )
}
