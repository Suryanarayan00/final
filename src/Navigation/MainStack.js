import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import BottomTabNavigatior from './BottomTabNavigator';
import { Order, OrderDetail } from '../Screens';

const Stack = createStackNavigator();

export default function () {
    return (
        <Fragment>
            <Stack.Screen name={navigationStrings.MAIN} component={BottomTabNavigatior} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.ORDER_DETAIL} component={OrderDetail} 
            options={{
                title: 'Order Detail',
                headerStyle: {
                    backgroundColor: '#1493ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
            <Stack.Screen name={navigationStrings.ORDER} component={Order} options={{
                title: 'My Order',
                headerStyle: {
                    backgroundColor: '#1493ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
        </Fragment>
    )
}