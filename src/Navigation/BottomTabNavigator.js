import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import { Accounts, Cart, Home, Sports } from '../Screens';



const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={navigationStrings.HOME}
            activeColor="#1493ff"
            inactiveColor='#484848'
            fontWeight='bold'
            barStyle={{ backgroundColor: 'white', borderTopWidth: 1, borderTopColor: 'lightgrey'}}
        >
            <Tab.Screen name={navigationStrings.HOME} component={Home}
                options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='home' color={color} size={26} />) }}
            />

            <Tab.Screen name={navigationStrings.SPORT} component={Sports}
                options={{
                    tabBarLabel: 'Deals',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} style={{fontWeight: 'bold'}} />
                    ),
                }} />

            <Tab.Screen name={navigationStrings.CART} component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={26} />
                    ),
                }} />

            <Tab.Screen name={navigationStrings.ACCOUNTS} component={Accounts}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    );
}