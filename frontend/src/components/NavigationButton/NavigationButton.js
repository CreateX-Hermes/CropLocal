import React from "react";
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../Styles"

const NavigationButton = (props) => {

    const defaultStyle = StyleSheet.create({
        default: {
            flex: 1,
            alignItems: 'center', 
            justifyContent: 'center', 

            borderRadius: 100,

            paddingHorizontal: '3.5%', 
            paddingVertical: '3.5%',

            backgroundColor: Colors.BUTTON_BACKGROUND, 
            ...props.style
        }
    })

    return (
        <TouchableOpacity onPress={props.onPress} style={defaultStyle.default}>
            {props.children}
        </TouchableOpacity>
    )
}

export default NavigationButton

