import React from "react";
import { View, Text, useWindowDimensions, TouchableOpacity, Alert } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Config from "react-native-config";
import RenderHTML from "react-native-render-html";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./JobDetail.style";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../Components/Buttons/Buttons";

export default function JobDetail({route}){
    const {id} = route.params
    const {data, loading, error} = useFetch(`${Config.API_JOBS_URL}/${id}`)
    const {width} = useWindowDimensions()
    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }
    const favorJobs = useSelector(selection => selection.favorJobs)
    const dispatch = useDispatch()
    const isAdded = (id)=>favorJobs.some(x=>x.id===id)
    const handleFavorites = favorJob => {
        if(favorJobs.length>0 && isAdded(favorJob.id)) {
            Alert.alert("Job was already added!")
        } else {
            dispatch({type:'ADD_JOB', payload:{favorJob}})
            Alert.alert("Job succesfully added!")
        }
    }
    const handleSubmit = () => {
        Alert.alert("Thanks, Succesfully Submited!")
    }

    return(
        <ScrollView style={styles.main_container}>            
            <Text style={styles.job_header}>{data.name}</Text>
            <View style={styles.shortDetailContainer}>                
                <Text style={styles.shortDetailHeader}>Locations: </Text>
                <Text style={styles.shortDetailText}>{data.locations && data.locations.length > 0 ? data.locations[0].name
                : 'Unknown Location'} </Text>
            </View>
            <View style={styles.shortDetailContainer}>
                <Text style={styles.shortDetailHeader}>Job Level:</Text>
                <Text style={styles.shortDetailText}>
                    {data.levels && data.levels.length > 0 ? data.levels[0].name
                    : 'Unknown Level'}</Text>
            </View>
            <Text style={styles.bodyHeader}>Job Detail</Text>
            <View style={styles.detailBody}>
                <RenderHTML source={{html:`${data.contents}`}} contentWidth={width}></RenderHTML>
            </View>
            <Buttons onPressSubmit={handleSubmit} onPressFavorites={()=>handleFavorites(data)}/>

        </ScrollView>
    )
}