import React from 'react'
import {
  StyleSheet,
  View,
  Modal,
  Text
} from 'react-native'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions"
import LottieView from "lottie-react-native";

const Loader = props => {
  const {
    loading,
    message,
    ...attributes
  } = props;
  return (
    <Modal
  transparent={true}
  animationType={'none'}
  visible={loading}>
    <View style={styles.modalBackground}>
    <View style={styles.activityIndicatorWrapper}>
      <LottieView style={{width:'18%', height:responsiveHeight(15)}}
      source={require("../../../assets/githubAnimation60fps.json")}
      loop
      autoPlay
    />
    <Text style={{color:'#FF0000'}}>{message}</Text>
    </View>
  </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
      backgroundColor: '#fff',
      height: responsiveHeight(20),
      width: responsiveWidth(30),
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
    }
  });

export default Loader;