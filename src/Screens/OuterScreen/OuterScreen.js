import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
import {
  moderateScaleVertical,
  textScale,
  moderateScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang/index';
import GradientButton from '../../Components/GradientButton';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
// import isJs from 'is_js';
// import imagePath from '../../constants/imagePath';
// import fontFamily from '../../styles/fontFamily';

export default function OuterScreen({navigation}) {
  const moveToNewScreen = (screenName, data = {}) => () => {
    navigation.navigate(screenName, {data});
  };
  return (
    <WrapperContainer>
      <View style={{marginTop: moderateScaleVertical(100), flex: 1}}>
        <Text style={styles.header}>{strings.LOGIN_YOUR_ACCOUNT}</Text>
        <View style={{marginHorizontal: moderateScale(24)}}>
          <Text style={styles.txtSmall}>{strings.JOIN_US_FOR_SHOPPING}</Text>
          <GradientButton
            containerStyle={{marginTop: moderateScaleVertical(160)}}
            btnText={strings.LOGIN_USING_PHONE}
            onPress={moveToNewScreen(navigationStrings.OTP_VERIFICATION)}
          />
          <GradientButton
            containerStyle={{marginTop: moderateScaleVertical(25)}}
            btnText={strings.LOGIN_USING_PHONE}
            onPress={moveToNewScreen(navigationStrings.OTP_VERIFICATION)}
          />
          
        </View>
        <View style={styles.bottomContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[styles.txtSmall, styles.alreadyText]}>
              {strings.DID_NOT_HAVE_AN_ACCOUNT}
            </Text>
            <TouchableOpacity
              hitSlop={hitSlopProp}
              onPress={moveToNewScreen(navigationStrings.LOGIN)}>
              <Text style={styles.login}> {strings.SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
}
