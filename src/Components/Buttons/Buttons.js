import React from "react"
import {View, TouchableOpacity, Text} from "react-native";
import styles from "./Buttons.style";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function Buttons({onPressSubmit,onPressFavorites}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.submitButton} onPress={onPressSubmit}>
                <Icon name="login" size={25} color='white' />
                <Text style={styles.buttonTitle}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favButton} onPress={onPressFavorites}>
                <Icon name="favorite" size={25} color='white' />
                <Text style={styles.buttonTitle}>Favorite Job</Text>
            </TouchableOpacity>
        </View>
    )
}
