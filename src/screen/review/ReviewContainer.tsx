import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { $ } from "../../../styles";
import { AppModuleParmList } from "../../app.navigation";
type ReviewContainerProps = NativeStackScreenProps<AppModuleParmList>;

export function ReviewContainer(props:ReviewContainerProps){
    return(
        <View style={[$.flex_1]}>
            <Text style={$.h6}>Review</Text>
            <TouchableOpacity
         onPress={()=>{
             props.navigation.navigate("About")
         }} 
        style={[
            $.bg_red,
            $.justify_content_center,
            $.align_items_center,
            $.border_rounded,
            $.m_3,
            {height:40}]}>
            
            <Text style={[$.h4,$.text_white]}>About Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=>{
             props.navigation.navigate("Home")
         }} 
        style={[
            $.bg_primary,
            $.justify_content_center,
            $.align_items_center,
            $.border_rounded,
            $.m_3,
            {height:40}]}>
            
            <Text style={[$.h4,$.text_white]}>Back</Text>
        </TouchableOpacity>

        </View>
    );
}