import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import navigationStrings from '../../constants/navigationStrings';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import styles from '../Signup/styles';
import fontFamily from '../../styles/fontFamily';
import { userContext } from '../../Context/Context';



import { connect } from 'react-redux';
// import actions from '../../redux/actions';




export default class Login extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    isLoading: false,
  }


  static contextType = userContext;
  


  onChange = (key) => {
    return (value) => {
      this.setState({
        [key]: value,
      });
    };
  }



  render() {
    return (
      <WrapperContainer>
        <View
          style={{
            height: moderateScaleVertical(80),
            paddingHorizontal: moderateScale(24),
            justifyContent: 'center',
          }}>

          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>

            <View style={style.inline}>
              <Image source={imagePath.back} style={style.leftArrow} />
              <Text style={style.fixedTopCenter}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,

            marginHorizontal: moderateScale(24),
          }}>
          <View style={{ height: moderateScaleVertical(48) }} />
          <Text style={styles.header}>{strings.FLIPKART}</Text>
          <Text style={styles.txtSmall}>{strings.WELCOME_NOTE}</Text>
          <View style={{ height: moderateScaleVertical(50) }} />



          <View style={{ paddingVertical: 20, width: '100%', }}>
            <TextInputWithLabel label="Name" onChangeText={this.onChange('name')} placeholder="Enter your name" />
            <TextInputWithLabel label="Email/Phone" keyboardType='email-address' onChangeText={this.onChange('email')} placeholder="Enter your email/phone" />
            <TextInputWithLabel password={true} secureTextEntry={true} label="Password" onChangeText={this.onChange('password')} placeholder="Enter your password" />
          </View>


          <GradientButton
            containerStyle={{ marginTop: moderateScaleVertical(10) }}
            onPress={() => this.props.navigation.navigate(navigationStrings.MAIN)}
            btnText={strings.LOGIN_ACCOUNT}
          />
          <View style={styles.bottomContainer}>
            <Text style={{ ...styles.txtSmall, color: colors.textGreyLight }}>
              {strings.DID_NOT_HAVE_AN_ACCOUNT}
              <Text
                // onPress={moveToNewScreen(navigationStrings.SIGN_UP)}
                style={{
                  color: colors.themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {' '}
                {strings.SIGN_UP}
              </Text>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </WrapperContainer>
    )
  }

}



const style = StyleSheet.create({
  leftArrow: {
    zIndex: 5,
    borderRadius: 30,
    tintColor: colors.spanColor,
    width: 30,
    height: 30
  },
  fixedTopCenter: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    width: '100%',
    textAlign: 'center'
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})