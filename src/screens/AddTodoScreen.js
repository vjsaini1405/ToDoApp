import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { s, vs, ms } from 'react-native-size-matters'


const AddTodoScreen = () => {
    const [data, setData] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        console.log("text",data);
        dispatch({ type: 'ADD_TODO', payload: {data} });
        // Alert.alert("Added SuccessFully")
        setData('');
    };

    return (
        <View style={styles.containerStyle}>
            <TextInput
                placeholder='Type here...'
                placeholderTextColor={"lightgrey"}
                style={styles.inputStyle}
                value={data} 
                onChangeText={(txt)=>setData(txt)} 
                />
            <TouchableOpacity
                style={styles.addNewButtonStyle}
                onPress={addTodo}
            >
                <Text style={{color:'black',fontSize:ms(14),fontWeight:"600"}}>{"Add New"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "black",
        flex: 1,
        paddingHorizontal: s(20),
        paddingVertical: vs(20),
        gap: 20,
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: ms(8),
        paddingHorizontal: s(10)
    },
    addNewButtonStyle: {
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        width: "30%",
        alignSelf: 'center',
        padding: s(10),
        borderRadius: ms(12)
    }
})