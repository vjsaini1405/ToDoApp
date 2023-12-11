import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'
import { Color } from '../../themes';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("MainScreen")
        }, 2000)
    }, [])
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/icons/checklist.png")} style={styles.splashImage} />
            <Text style={styles.textStyle}>{"ToDo App"}</Text>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.black
    },
    splashImage: {
        height: 150,
        width: 150,
        tintColor: Color.white
    },
    textStyle: {
        fontSize: 25,
        fontWeight: '900',
        textDecorationLine: 'underline',
        color: Color.white
    }
})