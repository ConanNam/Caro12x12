import React from 'react';
import {View, Image, Text} from 'react-native';

const SplashScreen = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Image
        style={{height: 150, width: 150}}
        source={require('./assets/tic-tac-toe.png')}></Image>
      <Text style={{marginTop: 30, fontSize: 50, textAlign: 'center'}}>
        Cờ Caro 12x12
      </Text>
    </View>
  );
};

export default SplashScreen;
