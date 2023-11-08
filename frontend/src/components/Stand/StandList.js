import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import Stand from './Stand';
import { useSelector } from 'react-redux';

function StandList(props) {
  const { user } = useSelector((state) => state.user);

  const [standData, setStandData] = useState([]);

  const fetchAllData = async () => {
    // console.log(jwt_decode(token))

    const { location, userID } = user;

    const fetchedData = await axios.post('http://localhost:8000/stand/findWithinRadius', {
      longitude: location[0],
      latitude: location[1],
      radius: 15,
      userID,
    });

    setStandData(fetchedData.data);
  };

  const fetchFavoriteData = async () => {
    const { location, userID } = user;

    const fetchedData = await axios.post('http://localhost:8000/stand/findFavoriteWithinRadius', {
      longitude: location[0],
      latitude: location[1],
      radius: 15,
      userID,
    });
    setStandData(fetchedData.data);
  };

  // Dependecies should be all filter items which make a post request to the backend

  useEffect(() => {
    if (props.filter.showFav) {
      fetchFavoriteData();
    } else {
      fetchAllData();
    }
  }, [props.filter.showFav]);

  let filteredStands = standData.filter((sData) => {
    const distance = Math.round((sData.distance / 1609) * 10) / 10;
    if (distance <= props.filter.maxRadius) {
      return true;
    }
    return false;
  });

  filteredStands = filteredStands.map((sData) => <Stand key={sData._id} data={sData} />);

  return (
    <View style={{ marginVertical: '3%' }}>
      <ScrollView>{filteredStands}</ScrollView>
    </View>
  );
}

export default StandList;
