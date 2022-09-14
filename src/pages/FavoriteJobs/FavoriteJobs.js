import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FavoriteJobs.style";
import JobCard from "../../Components/JobCard";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function FavoriteJobs({navigation}){
    const jobs = useSelector(selection => selection.favorJobs)
    const dispatch = useDispatch()
    const deleteJob = job => {
        dispatch({type:'DELETE_JOB', payload:{id:job.id}})
    }
    const handleJobDetail = id => {
        navigation.navigate("JobDetailScreen",{id})
    } 
    const renderFavoriteJobs = ({item}) => (
        <View>
            <JobCard job={item} onSelect={()=>handleJobDetail(item.id)}/>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>deleteJob(item)}>
                <Icon name="delete" size={25} color="white" />
                <Text style={styles.buttonText}>Remove Job</Text>
            </TouchableOpacity>
        </View>
    )
    return(
        <FlatList
            data={jobs}
            renderItem={renderFavoriteJobs}
            style={styles.container}
        />
        
    )
}
