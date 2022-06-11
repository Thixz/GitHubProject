import React from 'react'
import {View, Image} from 'react-native'

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions"

const ActionBarImage = () => {

  return (
    <View style={{flexDirection: 'row'}}>
<Image style={{width:responsiveWidth(20), height:responsiveHeight(13),backgroundColor:'#d8d8d8'}} 
          resizeMode="contain" 
          source={require('../../../image/GitHub-Mark.png')}
          />
    </View>
  )
}

export default ActionBarImage;