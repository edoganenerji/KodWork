import React from "react";
import Router from "./Router";
import FavProvider from "./Components/context/FavProvider/FavProvider";

export default () => {
    return(
        <FavProvider>
            <Router/>
        </FavProvider>
    )
}