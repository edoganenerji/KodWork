import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        margin:5,
        padding:5,
        borderRadius:10,
        backgroundColor:"white"
    },
    jobName:{
        fontSize:16,
        fontWeight:"bold",
        color:"black"
    },
    companyName:{
        fontSize:14,
        color:"black"
    },
    location:{
        fontSize:14,
        color:"white",
        borderWidth:.5,
        backgroundColor:"#f44336",
        padding:5,
        borderRadius:20,
        fontWeight:"bold"
    },
    locContainer:{
        alignItems:"baseline",
        margin:2
    },
    level:{
        fontSize:14,
        textAlign:"right",
        color:"#f44336",
        fontWeight:"bold"

    }
})