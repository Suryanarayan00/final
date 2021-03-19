import React from 'react';
import { Text,  TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

export default function ButtonWithArrow(props) {
    let {style={}, onPress='', size=15, text='Press me'} = props
    return(
        <TouchableOpacity onPress={onPress} style={[commonStyles.inline, commonStyles.border, {padding: 4, borderColor: colors.whiteOpacity77}, style]}>
            <Text style={{textAlign: 'center', color: colors.whiteOpacity77, fontFamily: fontFamily.medium}}>{text}</Text>
            <Ionicons name="alarm" size={size}/>
        </TouchableOpacity>
    )
}