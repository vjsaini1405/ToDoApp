import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ms} from 'react-native-size-matters'
import { Color } from '../themes';

export const HeadingText = ({ textFieldStyle, onPress, children,...props}) => {
    return (
      <Text 
      {...props}
      style={[styles.headingTextStyle, textFieldStyle]} onPress={onPress}>
        {children}
      </Text>
    );
  };

  export const TextField = ({ textFieldStyle, onPress, children,...props})  => {
    return (
      <Text 
      {...props}
      style={[styles.textStyle, textFieldStyle]} onPress={onPress}>
        {children}
      </Text>
    );
  };

  export const SmallText = ({ textFieldStyle, onPress, children,...props})  => {
    return (
      <Text 
      {...props}
      style={[styles.textStyle, textFieldStyle]} onPress={onPress}>
        {children}
      </Text>
    );
  };

const styles = StyleSheet.create({
    headingTextStyle:{
        fontSize:ms(18),
        color:Color.white
    },
    textStyle:{
        fontSize:ms(14),
        color:Color.white
    },
    smallTextStyle:{
        fontSize:ms(12),
        color:Color.white
    }
})