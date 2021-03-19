import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import MainHeader from '../../../Components/MianHeader';
import WrapperContainer from '../../../Components/WrapperContainer';
import SearchBar from '../../../Components/SearchBar';
import ImageWithStuff from '../../../Components/ImageWithStuff';
import imagePath from '../../../constants/imagePath';
import ShoppingCard from '../../../Components/ShoppingCard';
import data from '../../../constants/data';

export default class Home extends Component{

    render(){
        return(
            <WrapperContainer>
                <MainHeader/>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <ImageWithStuff style={imageWidth}  text='hello'  buttonText='BOOK NOW' source={imagePath.image1}/>
                    <ImageWithStuff style={imageWidth}  text='hello' button={true} buttonText='BOOK NOW' source={imagePath.image1}/>
                    <ImageWithStuff style={imageWidth}  text='hello' button={true} buttonText='BOOK NOW' source={imagePath.image1}/>
                    <ImageWithStuff style={imageWidth}  text='hello' button={true} buttonText='BOOK NOW' source={imagePath.image1}/>
                    <ImageWithStuff style={imageWidth}  text='hello' button={true} buttonText='BOOK NOW' source={imagePath.image1}/>
                    <ImageWithStuff style={imageWidth}  text='hello' button={true} buttonText='BOOK NOW' source={imagePath.image1}/>
                    <ImageWithStuff style={imageWidth}  text='hello' button={true} buttonText='BOOK NOW' source={imagePath.image1}/>

                </ScrollView>
                {<ShoppingCard data={data.shirtg}/>}
            </WrapperContainer>
        )
    }
}
const imageWidth= {
    width: 140,
    height: 140,
    margin: 2,
}