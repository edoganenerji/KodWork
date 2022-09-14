import React from "react";
import { TouchableWithoutFeedback ,View, Text } from "react-native";
import styles from "./JobCard.style";

export default function JobCard({job, onSelect}) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style = {styles.container}>
                <Text style={styles.    jobName}>{job.name}</Text>
                <Text style={styles.    companyName} >{job.company.name}</Text>
                <View style={styles.locContainer}>                    
                    <Text style={styles.location} >{job.locations[0].name}</Text>
                </View>
                <Text style={styles.    level} >{job.levels[0].name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}