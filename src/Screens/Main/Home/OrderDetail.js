import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class OrderDetail extends Component {
    render() {
        let item = this.props.route.params.data
        const { id,
            image1,
            name,
            type,
            discountPrice,
            originalPrice,
            offPrice } = item;
        return (
            <ScrollView>
                <View style={{backgroundColor: 'white', height: '100%', padding: 20}}>
                <View style={style.card}>
                    <Image source={image1} style={style.cardImage} />
                    <Text style={[style.name, { marginTop: 40 }]}>{name}</Text>
                    <Text style={style.type}>{type}</Text>
                    <View style={style.price}>
                        <Text style={style.discountPrice}>{discountPrice}</Text>
                        <Text style={style.originalPrice}>{originalPrice}</Text>
                        <Text style={style.offPrice}>{offPrice}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('home', {add: item})}}><Text style={style.btn}>Buy Now</Text></TouchableOpacity>
                </View>
                <View style={{paddingLeft: 15}}>
                    <Text style={{ marginVertical: 5 , color: 'crimson', fontWeight: "bold"}}>Free Delivery</Text>
                    <View style={style.price}>
                        <Text style={[style.btn, {backgroundColor: '#1493ff', borderRadius: 20, marginRight: 10}]}>4.6 star</Text>
                        <Text style={{fontSize: 12 ,color: 'grey'}}>167 rating</Text>
                    </View>
                    <Text style={{fontWeight:'bold',}}>Hurry, Only few left!</Text>
                    <View>
                        <Text style={style.offerHeader}>Available Offer</Text>
                        <View style={style.price}>
                            <Text style={style.textStyle}><AntDesign name='tags' size={20} color='green'/></Text>
                            <Text style={style.textStyle}>10% off on Axis bank credit card and Debit cards , up to 750. ON orders above $200</Text>
                        </View>
                        <View style={[style.price, {margin: 4}]}>
                            <Text style={style.textStyle}><AntDesign name='tags' size={20} color='green'/></Text>
                            <Text style={style.textStyle}>10% off on Axis bank credit card and Debit cards , up to 750. ON orders above $200</Text>
                        </View>
                        <View style={style.price}>
                            <Text style={style.textStyle}><AntDesign name='tags' size={20} color='green'/></Text>
                            <Text style={style.textStyle}>10% off on Axis bank credit card and Debit cards , up to 750. ON orders above $200</Text>
                        </View>
                        <View style={style.price}>
                            <Text style={style.textStyle}><AntDesign name='tags' size={20} color='green'/></Text>
                            <Text style={style.textStyle}>10% off on Axis bank credit card and Debit cards , up to 750. ON orders above $200</Text>
                        </View>
                    </View>
                    <View style={{borderTopColor: 'whitesmoke', borderTopWidth: 1}}>
                        <Text style={{fontWeight: 'bold', marginTop: 29}}>Delivery by</Text>
                        <Text >9 mar, Tues |<Text style={{color: 'green', fontWeight: 'bold'}}>Free</Text></Text>
                        <TouchableOpacity><Text style={{color: 'crimson', marginVertical: 10, fontWeight: 'bold'}}> View Detail</Text></TouchableOpacity>
                    </View>
                </View>

            </View>
            </ScrollView>
        )
    }
}



const style = StyleSheet.create({
    textStyle: {
        marginVertical: 5,
        fontWeight: 'normal',
        marginRight: 10,
        letterSpacing: .5,
        height: 50
    },
    card: {
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    },
    btn: {
        paddingVertical: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1493ff',
        paddingHorizontal: 5
    },
    cardImage: {
        resizeMode: 'contain',
        width: '100%',
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 15
    },
    name: {
        fontWeight: '700',
        fontSize: 15,
    },
    price: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    type: {
        fontSize: 13,
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
    offerHeader: {
        fontWeight: '300',
        fontSize: 18,
        marginTop: 30,
        marginBottom: 5,
        borderTopWidth: 1, 
        borderTopColor: 'whitesmoke'
    }


})