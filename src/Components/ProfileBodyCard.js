import React from "react"
import {View, Text, Image, StyleSheet} from "react-native"



export default function ProfileBodyCard(props) {
    let {data} = props
    let {title, titleCaption, titleTag, footText} = data
    return(
        <View style={style.card}>
            <View style={style.cardBody}>
                <View style={style.title}>
                <Text style={style.titleText}>{title}</Text>
                <Text style={style.titleTag}>{titleTag}</Text>
                </View>
                <Text style={style.titlecaption}>{titleCaption}</Text>
            </View>
            <View style={style.cardFoot}><Text style={style.footText}>{footText}</Text></View>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        padding: 10,
        margin:5,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'whitesmoke'
    },
    cardBody: {
        // margin: 10,
        marginBottom: 10,
        display: 'flex',
        borderBottomColor: 'whitesmoke',
        borderBottomWidth: 1
    },  
    title: {
        justifyContent: 'space-between',
        // margin: 4,
        display: 'flex',
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black',
    },
    titleTag: {
        color: '#1493ff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    titlecaption: {
        paddingVertical: 5,
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 12,
    },
    cardFoot: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: 4
    },
    footText: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#1493ff',
    }
})