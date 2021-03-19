import React from 'react';
import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native';
import fontFamily from '../styles/fontFamily';
import ButtonWithArrow from './ButtonWithArrow';

export default function ImageWithStuff(props) {
    let { source = '', style = {}, text = '', button = '', buttonText = '', onPress = '' } = props
    return (
        <ImageBackground source={source} style={[{ resizeMode: 'contain', borderRadius: 5 }, style]} >


            <View style={styles.absolute}>
                {button ?
                    <View>
                        <Text style={styles.textStyle}>{text}</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <ButtonWithArrow text={buttonText} onPress={onPress} />
                        </View>
                    </View>
                    :
                    <Text style={[styles.textStyle, { textAlign: 'center', }]}>{text}</Text>}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        bottom: 25,
        padding: 10,
        width: '100%',
    },
    textStyle: {
        fontFamily: fontFamily.semiBold, color: 'white', paddingVertical: 6
    }
})