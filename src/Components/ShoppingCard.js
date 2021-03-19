import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import {useNavigation} from '@react-navigation/native';




export default function ShoppingCard(props) {
    const navigation = useNavigation()
    const { data , addToCart} = props;

    let _renderItem = ({ item, index }) => {
        const { id,
            image1,
            name,
            type,
            discountPrice,
            originalPrice,
            offPrice } = item;


        return (
            <SafeAreaView key={index}>
                <View style={style.card}>
                    <TouchableOpacity onPress={()=>navigation.navigate('orderDetail', {data:item})}><Image source={image1} style={style.cardImage}></Image></TouchableOpacity>
                    <Text style={style.name}>{name}</Text>
                    <Text style={style.type}>{type}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={style.discountPrice}>${discountPrice}</Text>
                        <Text style={style.originalPrice}>{originalPrice}</Text>
                        <Text style={style.offPrice}>{offPrice}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{addToCart(item)}}><Text style={style.btn}>Add to cart</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    return (

        <FlatList
            data={data}
            numColumns={2}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index}
        />

    )

}

const style= StyleSheet.create({
    card: { 
        borderRadius: 5,  
        width: 215, 
        margin: 4,
        marginVertical: 5,
        backgroundColor: 'white',
        overflow: 'hidden', 
        justifyContent: 'space-around',
        alignItems: 'center'
     },
    cardImage: { 
        margin: 2,
        height: 190, 
        width: 210,
        overflow: 'hidden',
        resizeMode: 'contain'
    },
    name: { 
        fontWeight: '700', 
        fontSize: 13, 
        marginTop: 4, 
        marginLeft: 8 
    },
    type: { 
        fontSize: 13, 
        marginLeft: 8 
    },
    discountPrice: { 
        fontSize: 13, 
        marginLeft: 8, 
        fontWeight: 'bold' 
    },
    originalPrice: { 
        fontSize: 13, 
        marginLeft: 8, 
        color: 'grey' 
    },
    offPrice: { 
        fontSize: 13,  
        marginLeft: 8, 
        color: 'crimson' 
    },
    btn: { 
        fontSize: 14, 
        padding: 7,
        borderRadius: 10,  
        marginBottom: 10, 
        backgroundColor: '#1493ff', 
        color: 'white' , 
    }

})