import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { vs,s,ms } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';


const ListItem = ({ item, index }) => {

const dispatch = useDispatch()

    const toggleTodo = (id) => {
        console.log("id-===>>",id);
        dispatch({ type: 'TOGGLE_TODO', payload: { id } });
    };

    const deleteTodo = (id) => {
        dispatch({ type: 'DELETE_TODO', payload: { id } });
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{`Title: `}</Text>
                    <Text style={styles.valueText}>{item.title}</Text>
                </View>
                <TouchableOpacity onPress={() =>
                    toggleTodo(item.id)
                }
                    style={styles.titleContainer}
                >
                    <Text style={styles.titleText}>{`Completed: `}</Text>
                    <Text style={styles.valueText}>
                        {item.completed === true ? "completed" : "Not Completed"}
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => deleteTodo(item.id)}
            >
                <Image
                    source={require("../assets/images/trash.png")}
                    style={styles.deleteIconStyle}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: vs(10),
        paddingHorizontal: s(10),
        paddingVertical: 10,
        backgroundColor: "white",
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        width: "80%"
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 5
    },
    titleText: {
        fontSize: 12,
        fontWeight: "500",
        color: 'grey'
    },
    valueText: {
        color: "black",
        fontSize: 14,
        fontWeight: '600'
    },
    deleteIconStyle: {
        width: 20,
        height: 20
    }
})