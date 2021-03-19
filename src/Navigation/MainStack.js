import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import BottomTabNavigator from './BottomTabNavigator';
import { Order } from '../Screens';

const Stack = createStackNavigator();

export default function () {
    return (
        <Fragment>
            <Stack.Screen name={navigationStrings.TAB_ROUTES} component={BottomTabNavigator} options={{ headerShown: false }} />
            {/* <Stack.Screen name='orderDetail' component={OrderDetail} 
            options={{
                title: 'Order Detail',
                headerStyle: {
                    backgroundColor: '#1493ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/> */}
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