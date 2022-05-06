import { StyleProp, ViewStyle } from "react-native";
import Constants from "expo-constants"; 

const spacer = 10;
const status_bar_height = Constants.statusBarHeight;
export const AppView = {
    /* misc */
    follow_statusbar :{marginTop: status_bar_height} as StyleProp<ViewStyle>,

    /* alignment */
    flex_1: {flex:1} as StyleProp<ViewStyle>,
    flex_column : {flexDirection:"column"} as StyleProp<ViewStyle>,
    flex_row : {flexDirection:"row"} as StyleProp<ViewStyle>,
    flex_Wrap_Wrap : {flexWrap:"wrap"} as StyleProp<ViewStyle>,

    justify_content_start : {justifyContent:"flex-start"} as StyleProp<ViewStyle>,
    justify_content_end : {justifyContent:"flex-end"} as StyleProp<ViewStyle>,
    justify_content_center : {justifyContent:"center"} as StyleProp<ViewStyle>,

    align_items_start : {alignItems:"flex-start"} as StyleProp<ViewStyle>,
    align_items_end: {alignItems:"flex-end"} as StyleProp<ViewStyle>,
    align_items_center : {alignItems:"center"} as StyleProp<ViewStyle>,

    /* margin */

    m_1 : {margin: spacer * 0.25} as StyleProp<ViewStyle>,
    m_2 : {margin: spacer * 0.5} as StyleProp<ViewStyle>,
    m_3 : {margin: spacer } as StyleProp<ViewStyle>,
    m_4 : {margin: spacer * 1.5} as StyleProp<ViewStyle>,
    m_5 : {margin: spacer * 3} as StyleProp<ViewStyle>,

    mt_1 : {marginTop: spacer * 0.25} as StyleProp<ViewStyle>,
    mt_2 : {marginTop: spacer * 0.5} as StyleProp<ViewStyle>,
    mt_3 : {marginTop: spacer } as StyleProp<ViewStyle>,
    mt_4 : {marginTop: spacer * 1.5} as StyleProp<ViewStyle>,
    mt_5 : {marginTop: spacer * 3} as StyleProp<ViewStyle>,

    mb_05 : {marginBottom: spacer * 0.12} as StyleProp<ViewStyle>,
    mb_1 : {marginBottom: spacer * 0.25} as StyleProp<ViewStyle>,
    mb_2 : {marginBottom: spacer * 0.5} as StyleProp<ViewStyle>,
    mb_3 : {marginBottom: spacer } as StyleProp<ViewStyle>,
    mb_4 : {marginBottom: spacer * 1.5} as StyleProp<ViewStyle>,
    mb_5 : {marginBottom: spacer * 3} as StyleProp<ViewStyle>,

    mr_1 : {marginRight: spacer * 0.25} as StyleProp<ViewStyle>,
    mr_2 : {marginRight: spacer * 0.5} as StyleProp<ViewStyle>,
    mr_3 : {marginRight: spacer } as StyleProp<ViewStyle>,
    mr_4 : {marginRight: spacer * 1.5} as StyleProp<ViewStyle>,
    mr_5 : {marginRight: spacer * 3} as StyleProp<ViewStyle>,

    ml_1 : {marginLeft: spacer * 0.25} as StyleProp<ViewStyle>,
    ml_2 : {marginLeft: spacer * 0.5} as StyleProp<ViewStyle>,
    ml_3 : {marginLeft: spacer } as StyleProp<ViewStyle>,
    ml_4 : {marginLeft: spacer * 1.5} as StyleProp<ViewStyle>,
    ml_5 : {marginLeft: spacer * 3} as StyleProp<ViewStyle>,

    mx_1 : {marginHorizontal: spacer * 0.25} as StyleProp<ViewStyle>,
    mx_2 : {marginHorizontal: spacer * 0.5} as StyleProp<ViewStyle>,
    mx_3 : {marginHorizontal: spacer } as StyleProp<ViewStyle>,
    mx_4 : {marginHorizontal: spacer * 1.5} as StyleProp<ViewStyle>,
    mx_5 : {marginHorizontal: spacer * 3} as StyleProp<ViewStyle>,

    my_1 : {marginVertical: spacer * 0.25} as StyleProp<ViewStyle>,
    my_2 : {marginVertical: spacer * 0.5} as StyleProp<ViewStyle>,
    my_3 : {marginVertical: spacer } as StyleProp<ViewStyle>,
    my_4 : {marginVertical: spacer * 1.25} as StyleProp<ViewStyle>,
    my_5 : {marginVertical: spacer * 3} as StyleProp<ViewStyle>,

    /* padding */

    p_05 : {padding: spacer * 0.12} as StyleProp<ViewStyle>,
    p_1 : {padding: spacer * 0.25} as StyleProp<ViewStyle>,
    p_2 : {padding: spacer * 0.5} as StyleProp<ViewStyle>,
    p_3 : {padding: spacer } as StyleProp<ViewStyle>,
    p_4 : {padding: spacer * 1.5} as StyleProp<ViewStyle>,
    p_5 : {padding: spacer * 3} as StyleProp<ViewStyle>,

    pt_1 : {paddingTop: spacer * 0.25} as StyleProp<ViewStyle>,
    pt_2 : {paddingTop: spacer * 0.5} as StyleProp<ViewStyle>,
    pt_3 : {paddingTop: spacer } as StyleProp<ViewStyle>,
    pt_4 : {paddingTop: spacer * 1.25} as StyleProp<ViewStyle>,
    pt_5 : {paddingTop: spacer * 3} as StyleProp<ViewStyle>,

    pb_1 : {paddingBottom: spacer * 0.25} as StyleProp<ViewStyle>,
    pb_2 : {paddingBottom: spacer * 0.5} as StyleProp<ViewStyle>,
    pb_3 : {paddingBottom: spacer } as StyleProp<ViewStyle>,
    pb_4 : {paddingBottom: spacer * 1.25} as StyleProp<ViewStyle>,
    pb_5 : {paddingBottom: spacer * 3} as StyleProp<ViewStyle>,

    pr_1 : {paddingRight: spacer * 0.25} as StyleProp<ViewStyle>,
    pr_2 : {paddingRight: spacer * 0.5} as StyleProp<ViewStyle>,
    pr_3 : {paddingRight: spacer } as StyleProp<ViewStyle>,
    pr_4 : {paddingRight: spacer * 1.25} as StyleProp<ViewStyle>,
    pr_5 : {paddingRight: spacer * 3} as StyleProp<ViewStyle>,

    pl_1 : {paddingLeft: spacer * 0.25} as StyleProp<ViewStyle>,
    pl_2 : {paddingLeft: spacer * 0.5} as StyleProp<ViewStyle>,
    pl_3 : {paddingLeft: spacer } as StyleProp<ViewStyle>,
    pl_4 : {paddingLeft: spacer * 1.25} as StyleProp<ViewStyle>,
    pl_5 : {paddingLeft: spacer * 3} as StyleProp<ViewStyle>,

    px_1 : {paddingHorizontal: spacer * 0.25} as StyleProp<ViewStyle>,
    px_2 : {paddingHorizontal: spacer * 0.5} as StyleProp<ViewStyle>,
    px_3 : {paddingHorizontal: spacer } as StyleProp<ViewStyle>,
    px_4 : {paddingHorizontal: spacer * 1.25} as StyleProp<ViewStyle>,
    px_5 : {paddingHorizontal: spacer * 3} as StyleProp<ViewStyle>,

    py_1 : {paddingVertical: spacer * 0.25} as StyleProp<ViewStyle>,
    py_2 : {paddingVertical: spacer * 0.5} as StyleProp<ViewStyle>,
    py_3 : {paddingVertical: spacer } as StyleProp<ViewStyle>,
    py_4 : {paddingVertical: spacer * 1.25} as StyleProp<ViewStyle>,
    py_5 : {paddingVertical: spacer * 3} as StyleProp<ViewStyle>,

    /* border */

    border : {borderWidth:1} as StyleProp<ViewStyle>,
    border_bottom : {borderBottomWidth:1} as StyleProp<ViewStyle>,
    border_top : {borderTopWidth:1} as StyleProp<ViewStyle>,
    border_right : {borderRightWidth:1} as StyleProp<ViewStyle>,
    border_left : {borderLeftWidth:1} as StyleProp<ViewStyle>,
    border_rounded : {borderRadius:5} as StyleProp<ViewStyle>,

    /* elevation */

    elevation_1 :{elevation:1} as StyleProp<ViewStyle>,
    elevation_2 :{elevation:2} as StyleProp<ViewStyle>,
    elevation_3 :{elevation:3} as StyleProp<ViewStyle>,
    elevation_4 :{elevation:4} as StyleProp<ViewStyle>,
    elevation_5 :{elevation:5} as StyleProp<ViewStyle>,

    /* width */

    w_100 : {
        width:"100%",
    } as StyleProp<ViewStyle>
    
}