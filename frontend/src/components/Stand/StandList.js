import React from 'react';
import { ScrollView, View} from 'react-native'

import Stand from './Stand';

const StandList = () => {
    return (
        <View style={{marginVertical: '3%'}}>
            <ScrollView>
                <Stand />
                <Stand />
                <Stand />
                <Stand />
                <Stand />
            </ScrollView>
        </View>
    )
}

export default StandList