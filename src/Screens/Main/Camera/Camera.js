import React, { Component } from 'react';
import { View, Image, Text, Alert, StyleSheet, TouchableOpacity, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';





class Camera extends Component {


    state = { selectedImage: '' }

    selectImage = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Gallery",
                    onPress: this.getImageUsingGallery,
                },
                {
                    text: "Camera",
                    onPress: this.getImageUsingCamera
                }
            ],
            { cancelable: false }
        );
    }


    getImageUsingCamera = async () => {
        let picker = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        })
        if (picker.cancelled === true) {
            return;
        }
        this.setState({
            selectedImage: picker.uri
        })
    }

    getImageUsingGallery = async () => {
        let picker = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        })
        if (picker.cancelled === true) {
            return;
        }
        this.setState({
            selectedImage: picker.uri
        })

    }



    render() {

        return (
            <View style={styles.container}>
                <Button title='select Image' onPress={this.selectImage} />
                <Image source={{ uri: this.state.selectedImage }} style={{ resizeMode: 'contain', width: 300, height: 300 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default Camera;



// openImage = async () => {



    // let picker = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     quality: 1
    // })
    // if (picker.cancelled === true) {
    //     return;
    // }
    // alert('picker hu m', picker)
    // console.log("picker hu m ", picker);
    // this.setState({
    //     selectedImage: picker.uri
    // })


//     let picker = await ImagePicker.launchCameraAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         quality: 1
//     },)
//     if (picker.cancelled === true) {
//         return;
//     }
//     console.log("picker hu m ", picker);
//     this.setState({
//         selectedImage: picker.uri
//     })
// }
