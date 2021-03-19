import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import imagePath from '../constants/imagePath';


const sliderWidth = Dimensions.get('window').width + 300;
const itemWidth = Math.round(sliderWidth * 0.99)
export default class MyCarousel extends Component {

    state = {
        entries: [
            { imgUrl: imagePath.image1 },
            { imgUrl: imagePath.image1 },
            { imgUrl: imagePath.image1 },
            { imgUrl: imagePath.image1 },
            { imgUrl: imagePath.image1 },
            { imgUrl: imagePath.image1 },
            { imgUrl: imagePath.image1 },
        ]
    }

    _renderItem = ({ item, index }) => {
        return (
            <View key={index} style={style.slide}>
                <Image source={item.imgUrl} style={{ width: 434, height: 250, borderRadius: 5, resizeMode: 'stretch' }} />
            </View>
        );
    }

    render() {
        return (
            <Carousel
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />
        );
    }
}




const style = StyleSheet.create({
    slide: {
        borderRadius: 20
    },
})