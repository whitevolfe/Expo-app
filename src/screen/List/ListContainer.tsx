import { Text, TouchableOpacity, View } from "react-native";
import { $ } from "../../../styles";

export function ListContainer(){
    return(
        <View style={[$.flex_1]}>
            <Text style={$.h6}>About</Text>

            <TouchableOpacity
        
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