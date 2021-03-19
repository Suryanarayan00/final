import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BorderTextInput from '../../Components/BorderTextInput';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import styles from './styles';
import {otpTimerCounter} from '../../utils/helperFunctions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import actions from '../../redux/actions/index';

export default function OtpVerification({navigation}) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const updateState = data => setState(state => ({...state, ...data}));

  const moveToNewScreen = (screenName, data) => () => {
    navigation.navigate(screenName, {});
  };

  const _onLogin = () => {
    // actions.login({
    //   email:"ha@hyp.com",
    //   pwd:'122132'
    // }).then(res=>{

    // })
    navigation.navigate(navigationStrings.OTP_VERIFICATION);
  };
  const {timer} = state;
  return (
    <WrapperContainer>
      <View
        style={{
          height: moderateScaleVertical(80),
          borderBottomColor: colors.borderLight,
          paddingHorizontal: moderateScale(24),
          justifyContent: 'center',
          borderBottomWidth: 2,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={{alignSelf: 'flex-start'}}>
          <Image source={imagePath.back} />
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,

          marginHorizontal: moderateScale(24),
        }}>
        <View style={{height: moderateScaleVertical(48)}} />
        <Text style={styles.header}>{strings.LOGIN_YOUR_ACCOUNT}</Text>
        <Text style={styles.txtSmall}>{strings.ENTE_REGISTERED_EMAIL}</Text>
        <View style={{height: moderateScaleVertical(50)}} />
        <BorderTextInput placeholder={strings.YOUR_EMAIL} />
        <BorderTextInput placeholder={strings.ENTER_PASSWORD} />

        <TextInputWithLabel label="Email" placeholder="Enter your email" />

        <GradientButton
          containerStyle={{marginTop: moderateScaleVertical(10)}}
          onPress={_onLogin}
          btnText={strings.LOGIN_ACCOUNT}
        />

        <ButtonWithLoader
          containerStyle={{marginTop: moderateScaleVertical(10)}}
          onPress={_onLogin}
          btnText={strings.LOGIN_ACCOUNT}
        />
        <View style={{marginTop: moderateScaleVertical(50)}}>
          <View style={styles.socialRow}>
            <View style={styles.hyphen} />
            <Text style={styles.orText}>{strings.OR_LOGIN_WITH}</Text>
            <View style={styles.hyphen} />
          </View>
          <View style={styles.socialRowBtn}>
            <TouchableOpacity>
              <Image source={imagePath.google} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={imagePath.fb} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={imagePath.insta} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={imagePath.apple} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
            {strings.ALREADY_HAVE_AN_ACCOUNT}
            <Text
              onPress={moveToNewScreen(navigationStrings.SIGN_UP)}
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
  );
}
