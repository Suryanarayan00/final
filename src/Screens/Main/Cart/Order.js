import React, { Component } from 'react';
import { StyleSheet, Share, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';
import openMap from 'react-native-open-maps';
import imagePath from '../../../constants/imagePath';




export default class Order extends Component {



    // share a custom message
    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'order Id: 2948324, total Price: $34,34,345',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }



    // open geo location
    _goToYosemite() {
        openMap({ latitude: 30.720115, longitude: 76.832620 });
    }


    render() {
        let {price, items} = this.props.route.params
        return (
            <View style={style.container}>
                <View style={style.summary}>
                    <View style={style.summaryContainer}>
                        <Image source={imagePath.tick} style={[style.summaryImage, { resizeMode: 'contain', width: '100%', marginTop: 8 }]} />
                        <Text style={{ fontWeight: 'bold' }}>Address</Text>
                    </View>
                    <Text style={{ color: '#1493ff' }}>--------------------</Text>
                    <View style={style.summaryContainer}>
                        <Image source={imagePath.tick} style={[style.summaryImage, { resizeMode: 'contain', width: '100%', marginTop: 8 }]} />
                        <Text style={{ fontWeight: 'bold' }}>Order Summary</Text>
                    </View>
                    <Text style={{ color: '#1493ff' }}>--------------------</Text>
                    <View style={style.summaryContainer}>
                        <Image source={imagePath.tick} style={[style.summaryImage, { resizeMode: 'contain', width: '100%', marginTop: 8 }]} />
                        <Text style={{ fontWeight: 'bold' }}>Payment</Text>
                    </View>
                </View>

                <View style={style.body}>
                    <Text style={{ fontSize: 17, marginBottom: 10 }}>Suraj Kumar <Text style={{ paddingHorizontal: 95, backgroundColor: 'whitesmoke' }}>Home</Text></Text>
                    <Text>CodeBrew-Labs, sector 28, near Himachal bhawan...</Text>
                    <Text>Chandigarh - 160036</Text>
                    <Text style={{ marginVertical: 10 }}>7543875613</Text>
                    <Button title='Change or Add Address' />
                </View>




                <View style={[style.summary, { height: 200, backgroundColor: 'white', marginVertical: 5, alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() =>
                        Communications.email(
                            ['flipkarOrder@gmail.com'],
                            null,
                            null,
                            "Product Id flipkarSurya",
                            "Please type your message.......",
                        )}>
                        <View style={style.summaryContainer}>
                            <Image source={imagePath.email} style={style.summaryImage} />
                            <Text style={{ fontWeight: 'bold' }}>Email Us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Communications.phonecall('+919034881168', true)}>
                        <View style={style.summaryContainer}>
                            <Image source={imagePath.phone} style={style.summaryImage} />
                            <Text style={{ fontWeight: 'bold' }}>Call Us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onShare}>
                        <View style={style.summaryContainer}>
                            <Image source={imagePath.share} style={style.summaryImage} />
                            <Text style={{ fontWeight: 'bold' }}>Share</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToYosemite}>
                        <View style={style.summaryContainer}>
                            <Image source={imagePath.location} style={style.summaryImage} />
                            <Text style={{ fontWeight: 'bold' }}>Track</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={style.body}>
                    <Text style={style.header}>Price Detail</Text>

                    <View style={style.detail}>
                        <Text>Price ( <Text>15</Text> items)</Text>
                        <Text style={{ fontWeight: 'bold' }}>${price}</Text>
                    </View>
                    <View style={style.detail}>
                        <Text>Discount</Text>
                        <Text style={style.greenBold}>-${price/2}</Text>
                    </View>
                    <View style={style.detail}>
                        <Text>Buy more & save more</Text>
                        <Text style={style.greenBold}>-$34,45</Text>
                    </View>
                    <View style={style.detail}>
                        <Text>Coupons for You</Text>
                        <Text style={style.greenBold}>-${Math.floor(price/7)}</Text>
                    </View>
                    <View style={style.detail}>
                        <Text>Delivery Charges</Text>
                        <Text style={{ fontWeight: 'bold' }}>+${Math.floor(price/100)}</Text>
                    </View>
                    <View style={[style.detail, { paddingVertical: 20 }]}>
                        <Text style={{ fontWeight: 'bold' }}>Amount Payable</Text>
                        <Text style={{ fontWeight: 'bold' }}>${price}</Text>
                    </View>
                    <Text style={style.greenBold}>You will save ${Math.floor(price/2)} on this Order</Text>
                </View>

            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
        backgroundColor: 'lightgrey',
        justifyContent: 'space-evenly'
    },
    summary: {
        padding: 5,
        height: 55,
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
        tintColor: '#1493ff',
         resizeMode: 'cover',
          width: '100%',
           marginTop: 8,
        height: '50%',
    },
    body: {
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 5,
    },
    header: {
        color: 'grey',
        fontWeight: 'bold',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'whitesmoke'
    },
    detail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2
    },
    greenBold: {
        fontWeight: 'bold',
        color: 'green'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        // height: '50%'
    },
    contactContainer: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

})