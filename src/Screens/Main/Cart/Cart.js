import React, { Component } from "react";
import { View, Image, Button, TouchableOpacity, Text, SafeAreaView, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import CartCard from "../../../Components/CartCard";
import imagePath from "../../../constants/imagePath";
import {connect} from 'react-redux';
import store from "../../../redux/store";

class Cart extends Component {


    state = { price: 0, item: 0 }
    render() {
        let {getState} = store;
        let { price, item } = this.state
        // let {cardData} = getState();
        
        
        let increment = (id) => {
            let index = cardData.findIndex((value) => value.id == id)
            cardData[index].num = cardData[index].num + 1
            this.setState({ item: item + 1, cardData: this.state.cardData })
        }

        let decrement = (id) => {
            let index = cardData.findIndex((value) => value.id == id)
            if (cardData[index].num != 0) {
                cardData[index].num = cardData[index].num - 1
            }
            this.setState({ item: item - 1, cardData: this.state.cardData })
        }

        return (
            <SafeAreaView style={{ backgroundColor: 'whitesmoke', paddingBottom: 120 }}>
                <View style={style.summary}>
                    <View style={style.summaryContainer}>
                        <Image source={imagePath.tick} style={[style.summaryImage, { resizeMode: 'contain', width: '100%', marginTop: 8 }]} />
                        <Text style={{ fontWeight: 'bold' }}>Address</Text>
                    </View>
                    <Text style={{ color: 'blue' }}>--------------------</Text>
                    <View style={style.summaryContainer}>
                        <Text style={style.summaryImage}>2 </Text>
                        <Text style={{ fontWeight: 'bold' }}>Order Summary</Text>
                    </View>
                    <Text style={{ color: 'grey' }}>--------------------</Text>
                    <View style={style.summaryContainer}>
                        <Text style={style.summaryImage}>3</Text>
                        <Text style={{ fontWeight: 'bold' }}>Payment</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={style.body}>
                        <Text style={{ fontSize: 17, marginBottom: 10 }}>Suraj Kumar <Text style={{ paddingHorizontal: 95, backgroundColor: 'whitesmoke' }}>Home</Text></Text>
                        <Text>CodeBrew-Labs, sector 28, near Himachal bhawan...</Text>
                        <Text>Chandigarh - 160036</Text>
                        <Text style={{ marginVertical: 10 }}>7543875613</Text>
                        <Button title='Change or Add Address' />
                    </View>
                    {cardData.map((Value, key) => {
                        return (<CartCard increment={increment} decrement={decrement} key={key} data={Value} />)
                    })}
                    <View style={style.cartFoot}>
                        <View>
                            <Text style={style.totalPrice}>$ <Text>{price}</Text></Text>
                            <Text style={style.priceDetail}>View Price Detail</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('order', { price: price, items: item })}><Text style={style.btn1}>Place Order</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const mapStateToProps = state => {

    return (
      {
        cardData: state.shopping.cardData
      }
    )
  }
  
  export default connect(mapStateToProps)(Cart)



const style = StyleSheet.create({
    summary: {
        paddingTop: 50,
        padding: 20,
        height: 110,
        margin: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
        borderBottomColor: 'whitesmoke',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderRadius: 5
    },
    summaryContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryImage: {
        height: '50%',
    },
    body: {
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 5,
    },
    bodyTop: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 5,
    },
    btn: {
        padding: 5,
        color: 'skyblue',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'whitesmoke'
    },
    cartFoot: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    totalPrice: {
        fontWeight: 'bold',
        fontSize: 17
    },
    priceDetail: {
        color: 'green',
        fontSize: 12,
        fontWeight: 'bold'
    },
    btn1: {
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        backgroundColor: '#ff3f6c',
        color: 'white'
    }
})