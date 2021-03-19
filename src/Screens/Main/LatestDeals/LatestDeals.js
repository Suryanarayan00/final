import React, { Component } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native"
import DealCard from "../../../Component/DealCard"
import ShoppingCard from "../../../Component/ShoppingCard"
import data from "../../../constants/data"

export default class LatestDeals extends Component {



    render() {
        let { cantIgnore, forYou, dayDeal, shirtg, dontMiss, topSelection} = data
        return (
            <SafeAreaView style={style.dealPage}>

                <ScrollView>
                    {/* Deals of the Day */}
                    <View>
                        <View style={style.header}>
                            <View>
                                <Text style={style.title}>Deals of the Day</Text>
                                <Text style={style.time}>10:02:03</Text>
                            </View>
                            <View style={style.header}>
                                <Image style={{ width: 40, height: 40 }} />
                                <TouchableOpacity style={style.btn}><Text style={{color: 'skyblue',fontWeight: 'bold'}}>View All</Text></TouchableOpacity>
                            </View>
                        </View>
                        {true ?
                            <View style={style.showCard}>
                                {<DealCard data={cantIgnore}/>}
                            </View>
                            : <View>
                                {<ShoppingCard data={dontMiss}/>}
                            </View>}
                    </View>


                    {/*Discount for you  */}
                    <View>
                        <View style={style.header}>
                            <View>
                                <Text style={style.title}>Top selection for You</Text>
                                <Text style={style.time}>10:02:03</Text>
                            </View>
                            <View style={style.header}>
                                <Image style={{ width: 40, height: 40 }} />
                                <TouchableOpacity style={style.btn}><Text style={{color: 'skyblue',fontWeight: 'bold'}}>View All</Text></TouchableOpacity>
                            </View>
                        </View>
                        {true ?
                            <View style={style.showCard}>
                                {<DealCard data={dayDeal} />}
                            </View>
                            : <View>
                                {<ShoppingCard data={shirtg}/>}
                            </View>}
                    </View>


                    {/*Discount for you  */}
                    <View>
                        <View style={style.header}>
                            <View>
                                <Text style={style.title}>You can't ignore it</Text>
                                <Text style={style.time}>10:02:03</Text>
                            </View>
                            <View style={style.header}>
                                <Image style={{ width: 40, height: 40 }} />
                                <TouchableOpacity style={style.btn}><Text style={{color: 'skyblue',fontWeight: 'bold'}}>View All</Text></TouchableOpacity>
                            </View>
                        </View>
                        {true ?
                            <View style={style.showCard}>
                                {<DealCard data={forYou}/>}
                            </View>
                            : <View>
                                {<ShoppingCard data={topSelection}/>}
                            </View>}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}



const style = StyleSheet.create({
    dealPage: {
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    header: {
        backgroundColor: 'skyblue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    time: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'grey'
    },
    btn: {
        backgroundColor: 'white',
        borderRadius: 4,
        backgroundColor: 'white',
        padding: 5,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },

})