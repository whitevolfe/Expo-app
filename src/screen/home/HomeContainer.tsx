import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { $ } from "../../../styles";
import { AppModuleParmList } from "../../app.navigation";
type HomeContainerProps = NativeStackScreenProps<AppModuleParmList>;

export function HomeContainer(props:HomeContainerProps){

    const clickHandler=()=>{
        Setname("karuna")
        Setclicked(!clicked)
    }


    const [name ,Setname]=React.useState<string>("suresh")
    const [clicked,Setclicked]=React.useState<Boolean>(false)
    return(
        <View style={[$.flex_1]}>
            <View style={[$.mt_3]}>
            <Text style={[$.h3,{color:clicked ?$.primary:$.orange}]}>{name}</Text>
            </View>



            <TouchableOpacity
         onPress={clickHandler} 
        style={[
            $.m_4,
            $.bg_primary,
            $.justify_content_center,
            $.align_items_center,
            $.border_rounded,
            $.m_3,
            {height:40}]}>
            
            <Text style={[$.h4,$.text_white]}>Update State</Text>
        </TouchableOpacity>


        <TouchableOpacity
         onPress={()=>{
             props.navigation.navigate("Review")
         }} 
        style={[
            $.bg_green,
            $.justify_content_center,
            $.align_items_center,
            $.border_rounded,
            $.m_3,
            {height:40}]}>
            
            <Text style={[$.h4,$.text_white]}>Review Screen</Text>
        </TouchableOpacity>

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

        </View>
    );
}