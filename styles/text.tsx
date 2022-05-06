import { StyleProp, TextStyle } from "react-native";

export const AppText={
    h1:{fontSize:40} as StyleProp<TextStyle>,
    h2:{fontSize:32} as StyleProp<TextStyle>,
    h3:{fontSize:28} as StyleProp<TextStyle>,
    h4:{fontSize:24} as StyleProp<TextStyle>,
    h5:{fontSize:20} as StyleProp<TextStyle>,
    h6:{fontSize:16} as StyleProp<TextStyle>,
    h7:{fontSize:14} as StyleProp<TextStyle>,


    font_bold:{fontWeight:"bold"} as StyleProp<TextStyle>,
    font_light:{fontWeight:"normal"} as StyleProp<TextStyle>,

    left:{textAlign:"left"} as StyleProp<TextStyle>,
    center:{textAlign:"center"} as StyleProp<TextStyle>,
    right:{textAlign:"right"} as StyleProp<TextStyle>,
}