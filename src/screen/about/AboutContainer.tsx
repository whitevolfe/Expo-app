import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { $ } from "../../../styles";
import { AppModuleParmList } from "../../app.navigation";
type AboutContainerProps = NativeStackScreenProps<AppModuleParmList>;

export function AboutContainer(props:AboutContainerProps){
    return(
        <View style={[$.flex_1]}>
            <Text style={$.h6}>About</Text>

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
            
            <Text style={[$.h4,$.text_white]}>Home Screen</Text>
        </TouchableOpacity>

        </View>
    );
}