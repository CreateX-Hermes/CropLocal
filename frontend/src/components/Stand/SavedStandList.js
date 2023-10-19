import React, {useEffect, useState} from 'react';
import { ScrollView, View} from 'react-native'
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Stand from './Stand';
import jwt_decode from 'jwt-decode'

const StandList = () => {
    
    const [standData, setStandData] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
            const token = await AsyncStorage.getItem("authToken")

            //console.log(jwt_decode(token))

            const {location, userID} = jwt_decode(token)

            const fetchedData = await axios.post("http://localhost:8000/stand/findFavoriteWithinRadius", {longitude: location[0], latitude: location[1], radius: 15, userID: userID})
            setStandData(fetchedData.data)

        }
        
        fetchData()

    }, [])

    return (
        <View style={{marginVertical: '3%'}}>
            <ScrollView>
                {standData.map((sData) => (
                    <Stand key = {sData._id} data = {sData} />
                ))}

            </ScrollView>
        </View>
    )
}

export default StandList