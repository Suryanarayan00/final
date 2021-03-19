import React from 'react';
import {View, Text, Image} from 'react-native';

export default function CategoryIcon(props) {
    let{data} = props
    let{image, text} = data
    return(
        <View style={{ margin: 10, }}>
            <Image source={image} style={{width:60, height:50}}/>
            <Text style={{color: 'grey', textAlign: 'center', fontSize: 12}}>{text}</Text>
        </View>
    )
}