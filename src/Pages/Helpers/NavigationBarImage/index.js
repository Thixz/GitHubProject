import React from 'react';
import { View, Image } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ActionBarImage = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={{
          width: responsiveWidth(18),
          height: responsiveHeight(11),
          backgroundColor: '#d8d8d8',
          marginRight:15
        }}
        resizeMode="cover"
        source={require('../../../image/GitHub-Mark.png')}
      />
    </View>
  );
};

export default ActionBarImage;
