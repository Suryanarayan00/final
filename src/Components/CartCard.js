import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'


export default function CartCard(props) {
    let { data, increment, decrement} = props
    const { id,
        image1,
        name,
        type,
        discountPrice,
        originalPrice,
        offPrice, num } = data;
    return (
        <SafeAreaView style={style.card}>
            <View style={style.cardHead}>
                <View>
                    <Text style={style.headTitle}>{name}</Text>
                    <Text style={style.headCaption}>{type}</Text>
                    {/* <Text style={style.rating}>{rating}</Text> */}
                </View>
                <Image source={image1} style={{ width: 100, height: 90, resizeMode: 'contain' }} />
            </View>
            <View style={style.cardBody}>
                <View>
                    <View style={style.price}>
                        <View><Text style={style.discountPrice}>${discountPrice}</Text></View>
                        <View><Text style={style.actulaPrice}>{originalPrice}</Text></View>
                        <View><Text style={style.discount}>{offPrice}</Text></View>
                    </View>
                    <Text style={style.offer}>3 offer Available</Text>
                    <Text style={style.deliveryTime}>deliver by tuesDay</Text>
                </View>

                <View style={{display: 'flex', flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>increment(id)}><Text style={style.btn}> + </Text></TouchableOpacity>
                   <Text>  Qty: {num} </Text>
                    <TouchableOpacity onPress={()=>decrement(id)}><Text style={style.btn}> - </Text></TouchableOpacity>
                </View>

            </View>
            <View style={style.cardFoot}>
                <TouchableOpacity><Text style={[style.button, { borderRightWidth: 1, paddingLeft: 50, paddingRight: 66, borderRightColor: 'lightgrey', }]}> Save for Later</Text></TouchableOpacity>
                <TouchableOpacity><Text style={[style.button, { borderLeftWidth: 1, paddingRight: 50, paddingLeft: 65, borderLeftColor: 'lightgrey', }]}>Remove</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    card: {
        marginVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center'
    },
    cardHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headTitle: {
        fontSize: 20,
        color: 'black'
    },
    headCaption: {
        color: 'grey',
        fontSize: 12,
        marginVertical: 6,
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    discountPrice: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginRight: 5,
    },
    actulaPrice: {
        color: 'grey',
        fontSize: 12,
        fontWeight: 'bold',
        margin: 2,
    },
    discount: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 12,
        margin: 2
    },
    offer: {
        color: 'green',
        fontSize: 12,
        marginVertical: 2
    },
    deliveryTime: {
        fontWeight: 'bold',
        fontSize: 12,
        paddingBottom: 10,
        color: 'black'
    },
    btn: {
        borderRadius: 4,
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: 'grey',
    },
    cardFoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'lightgrey',
        borderWidth: 1,
    },
    button: {
        borderRadius: 4,
        padding: 5,
        fontWeight: 'bold',

    }

})