import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';




export default function DealCard(props) {


    const { data } = props;
    let _renderItem = ({ item, index }) => {
        const { image, discount, collections, brand } = item;
        return (
            <View key={index} style={style.card}>
                <Image source={image} style={style.cardImage} />
                <Text style={style.discount}>{discount}</Text>
                <Text style={style.collections}>{collections}</Text>
                <Text style={style.brand}>{brand}</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={data}
            numColumns={2}
            renderItem={_renderItem}
            keyExtractor={item => item.id}
        />

    )
}


const style = StyleSheet.create({
    card: {
        margin: 4,
        backgroundColor: 'white',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'wheat',
        borderWidth: 1,
        borderRadius: 5
    },
    cardImage: {
        width: 210,
        height: 200,
        // padding: 5,
        resizeMode: 'contain',
        overflow: 'hidden'
    },
    discount: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    collections: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'skyblue'
    },
    brand: {
        fontWeight: 'normal',
        fontSize: 13,
        color: 'skyblue',
        paddingBottom: 5,
    }
})