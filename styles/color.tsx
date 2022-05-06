import { StyleProp, TextStyle, ViewStyle } from "react-native"

const primary = "#036bc0"
const sec = "#f3c60c"
const white = "white"
const black = "black"
const light = "#a4a8b0"
const orange = "orange"

export const AppColours={
    primary,
    sec,
    white,
    black,
    light,
    orange,

    text_primary : {color:primary} as StyleProp<TextStyle>,
    text_red : {color:"red"} as StyleProp<TextStyle>,
    text_Success : {color:"green"} as StyleProp<TextStyle>,
    text_white : {color:"white"} as StyleProp<TextStyle>,


    bg_primary : {backgroundColor:primary} as StyleProp<ViewStyle>,
    bg_red: {backgroundColor:"red"} as StyleProp<ViewStyle>,
    bg_yellow : {backgroundColor:"yellow"} as StyleProp<ViewStyle>,
    bg_green : {backgroundColor:"green"} as StyleProp<ViewStyle>,

    border_primary : {borderColor:primary} as StyleProp<ViewStyle>,
    border_red: {borderColor:"red"} as StyleProp<ViewStyle>,
    border_blue : {borderColor:"blue"} as StyleProp<ViewStyle>,
    border_light : {borderColor:"light"} as StyleProp<ViewStyle>,

}