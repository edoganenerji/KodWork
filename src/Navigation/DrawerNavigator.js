import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Jobs from "../pages/Jobs";
import FavoriteJobs from "../pages/FavoriteJobs";
const Drawer = createDrawerNavigator()
export default function DrawerNavigator() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="Jobs" component={StackNavigator} options={{headerShown:false,
                headerTitleStyle:{color:"#f44334"}, headerTitleAlign:"center"}}
            />
            <Drawer.Screen
                name="Favorite Jobs" 
                component={FavoriteJobs}
                options={{headerShown:false}}
            />
        </Drawer.Navigator>
    )
}