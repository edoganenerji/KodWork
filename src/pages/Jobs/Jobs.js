import React, { useState } from "react";
import { FlatList, View, Text, Button } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Config from "react-native-config";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error/Error";
import JobCard from "../../Components/JobCard/JobCard";
export default function Jobs ({navigation}) {
    const [pageID, setPageID] =  useState(0)
    const {data, loading, error} = useFetch(`${Config.API_JOBS_URL}?page=${pageID}`)
    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }
    const handleDetail = id => {
        navigation.navigate("JobDetailScreen",{id})
    } 

    const renderJob = ({item}) => (
        <JobCard job={item} onSelect={() => handleDetail(item.id)}  />
    )

    return(
        <View>
            <FlatList
                data={data.results}
                renderItem={renderJob}
            />
        </View>
    )
} 