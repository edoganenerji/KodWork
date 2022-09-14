import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Jobs from "../pages/Jobs";
import JobDetail from "../pages/JobDetail";
const Stack = createNativeStackNavigator()
export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="JobScreen" component={Jobs} options={{title:"Jobs", headerTitleStyle:{color:"#f44334"}, headerTitleAlign:"center"}}
            />  
            <Stack.Screen name="JobDetailScreen" component={JobDetail} options={{title:"Jobs", headerTitleStyle:{color:"#f44334"}, headerTitleAlign:"center"}}/>  
        </Stack.Navigator>
    )
}