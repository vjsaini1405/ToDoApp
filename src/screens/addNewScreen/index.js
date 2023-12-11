import React, { useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { vs, s, ms } from 'react-native-size-matters'
import { TextField } from '../../components';
import { Color } from '../../themes';

const AddNewScreen = ({ navigation }) => {
    const [state, setState] = useState({
        value: "",
        loading: false,
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                >
                    <Image
                        source={require("../../assets/icons/left-arrow.png")}
                        style={{ width: s(15), height: vs(15), tintColor: Color.white }}
                    />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    const handleAddNew = () => { }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder='Type here...'
                value={state.value}
                onChangeText={(text) =>
                    setState((prev) => ({ ...prev, value: text }))
                }
            />
            <TouchableOpacity
                onPress={() => handleAddNew()}
                style={styles.addNewButtonStyle}
            >
                <TextField textFieldStyle={styles.textStyle}>{"Add New"}</TextField>
            </TouchableOpacity>
        </View>
    )
}

export default AddNewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.black,
        paddingTop: vs(25),
        paddingHorizontal: s(20),
        alignItems: 'center'
    },
    inputStyle: {
        backgroundColor: Color.white,
        borderRadius: ms(8),
        paddingHorizontal: s(10),
        paddingVertical: vs(8),
        width: "100%",
        color: Color.black
    },
    addNewButtonStyle: {
        backgroundColor: Color.white,
        borderRadius: ms(8),
        marginTop: vs(30)
    },
    textStyle: {
        color: Color.black,
        paddingHorizontal: s(10),
        paddingVertical: vs(5)
    }
})