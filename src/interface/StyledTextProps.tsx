export interface StyledTextProps {
  children: React.ReactNode
  textGray?: boolean
  textGray2?: boolean
  textWhite?: boolean
  textS?: boolean
  textM?: boolean
  textL?: boolean
  textXL?: boolean
  textXXL?: boolean
  textCenter?: boolean
  textJustify?: boolean
  textLeft?: boolean
  textRight?: boolean
  textBold?: boolean
  textOverflow?: number
  numberOfLines?: number
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
}