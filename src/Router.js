import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "./Navigation/DrawerNavigator";
export default function Router () {
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}


