import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { $ } from "../styles"
import { AboutContainer } from "./screen/about/AboutContainer"
import { HomeContainer } from "./screen/home/HomeContainer"
import { ListContainer } from "./screen/List/ListContainer"
import { ReviewContainer } from "./screen/review/ReviewContainer"
import { Entypo } from '@expo/vector-icons';



export type AppModuleParmList = {
    HomeTab : NavigatorScreenParams<BottomModuleParamList>;
    Review : undefined
    About : undefined
}

export type BottomModuleParamList={
    Home:undefined;
    List:undefined;
}

const AppModule =createNativeStackNavigator<AppModuleParmList>();
const Bottom =createBottomTabNavigator<BottomModuleParamList>();

export function Appnavigation (){
    return(
        <NavigationContainer>
           <AppModule.Navigator>
            <AppModule.Screen
             name="HomeTab"
             component={BottomModule}
             options={{
                 title:"Home",
                 headerTitleStyle:{color:$.primary}
             }} />

            <AppModule.Screen
             name="Review"
             component={ReviewContainer}
             options={{
                 title:"Review Screen",
                 headerTitleStyle:{color:$.primary}
             }} />

            <AppModule.Screen
             name="About"
             component={AboutContainer}
             options={{
                 title:"About Screen",
                 headerTitleStyle:{color:$.primary}
             }} />

         </AppModule.Navigator> 
            

        </NavigationContainer>
    );
}
export type BottomModuleProps = NativeStackScreenProps<AppModuleParmList,
"HomeTab"
>;        

export function BottomModule(props:BottomModuleProps){
    return(

        <Bottom.Navigator
        screenOptions={{
            tabBarActiveTintColor:$.primary,
            headerShown:false
            
        }}
        >

            <Bottom.Screen
              name="Home"
              component={HomeContainer}
              
                  options={{
                      tabBarLabel:"Home",
                      tabBarIcon:({color,size})=>(
                        <Entypo name="home" size={size} color={color} />
                      ),
                  }}/>
            
            <Bottom.Screen
              name="List"
              component={ListContainer}
              options={{
                tabBarLabel:"List",
                tabBarIcon:({color,size})=>(
                  <Entypo name="list" size={size} color={color} />
                ),
            }}/>
              


        </Bottom.Navigator>

    );
}