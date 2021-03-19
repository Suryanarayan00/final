import React, { Component } from "react"
import { View, Text, SafeAreaView, Alert, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import * as ImagePicker from 'expo-image-picker';
import ProfileBodyCard from "../../../Components/ProfileBodyCard";



export default class Profile extends Component {

    constructor() {
        super();
        this.state = {
            profileDetail: [
                {
                    title: 'Flipkart Plus',
                    titleCaption: 'Your membership will auto renew on 29th Sep 2021',
                    titleTag: '',
                    footText: 'VIEW YOUR MEMBERSHIP',
                },
                {
                    title: 'My Orders',
                    titleCaption: '',
                    titleTag: '',
                    footText: 'VIEW ALL ORDERS',
                },
                {
                    title: 'Flipkart Pay Later',
                    titleCaption: '',
                    titleTag: '$20/ $2000',
                    footText: 'VIEW DETAILS',
                },
                {
                    title: 'My Cards & Wallet',
                    titleCaption: '',
                    titleTag: '$0',
                    footText: 'VIEW DETAILS',
                },
                {
                    title: 'My Reviews',
                    titleCaption: '',
                    titleTag: '',
                    footText: 'VIEW YOUR Q&A',
                },
                {
                    title: 'My Addresses',
                    titleCaption: 'codeBrew Labs, sector 28, Chandigarh',
                    titleTag: '',
                    footText: 'VIEW 6 MORE',
                },
            ],
            selectedImage: 'https://img.icons8.com/bubbles/2x/user-male.png',
        }
    }



    

    render() {
        let { profileDetail, selectedImage } = this.state
        return (
            <SafeAreaView style={style.container}>
                <ScrollView>
                    <View style={style.profile}>
                        <TouchableOpacity >
                            <FontAwesome size={20} name="edit" style={{ position: 'absolute', right: 0, color: 'white', bottom: 0, zIndex: 23 }} />
                            <Image style={style.profileImage} source={{ uri: selectedImage }} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Suraj Kumar</Text>
                            <Text style={{ color: 'white' }}>+917543875613</Text>
                            <Text style={{ color: 'white', paddingTop: 15 }}>sk8013445@gmail.com</Text>
                        </View>
                    </View>
                    <View>
                        {profileDetail.map((Value, index) => {
                            return (<ProfileBodyCard key={index} data={Value} />)
                        })}
                    </View>
                    <View style={style.foot}>
                        <TouchableOpacity style={style.bottomText}><Ionicons
                            name='notifications' size={20} style={{ paddingRight: 10 }} /><Text style={style.bottomBorder}>Language setting</Text></TouchableOpacity>
                        <TouchableOpacity style={style.bottomText}><Ionicons
                            name='settings' size={20} style={{ paddingRight: 10 }} /><Text style={style.bottomBorder}>Account Setting</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')} style={style.bottomText}><Ionicons
                            name='log-out' size={20} style={{ paddingRight: 10 }} /><Text style={style.bottomBorder}>Logout of this browser</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')} style={style.bottomText}><Ionicons
                            name='notifications' size={20} style={{ paddingRight: 10 }} /><Text style={style.bottomBorder}>Logout of all devices</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const style = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        width: '100%',
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#1493ff'
    },
    profileImage: {
        width: 150,
        resizeMode: 'cover',
        borderRadius: 140,
        height: 150
    },
    foot: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        margin: 4,
        // paddingLeft: 20,
        padding: 10,
        justifyContent: 'center',

    },
    bottomText: {
        display: 'flex',
        flexDirection: 'row',
        // margin: 8,
        padding: 10,
        // paddingBottom: 10
    },
    bottomBorder: {
        fontSize: 15,
        fontWeight: 'bold',
        // borderBottomWidth: 1,
        // borderBottomColor: 'whitesmoke',
    }
})