import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import InitialState from "./store"
import reducers from "./reducers"
export default function FavProvider({children}){
    const store = legacy_createStore(reducers,InitialState)
    return(
        <Provider store={store}>{children}</Provider>
    )
}