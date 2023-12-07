import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { vs, s, ms } from 'react-native-size-matters';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  
  const todos = useSelector((state) => state.todos);

  console.log("todos",todos)

  useEffect(() => {
    dispatch({ type: 'FETCH_TODOS', payload: { start: 0, limit: 10 } });
  }, [dispatch]);

  const handleRefresh = useCallback(() => {
    dispatch({ type: 'FETCH_TODOS', payload: { start: 0, limit: 10 } });
  }, [dispatch]);


  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch({ type: 'FETCH_TODOS' });
    setRefreshing(false);
  };

  const handleLoadMore = useCallback(() => {
    const start = todos.length;
    dispatch({ type: 'FETCH_TODOS', payload: { start, limit: 10 } });
  }, [dispatch, todos]);

  const renderItem = useCallback(({ item, index }) => {
    return (
      <View style={styles.listMainContainer}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{`Title: `}</Text>
            <Text style={styles.valueText}>{item.title}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
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
    );
  },[])

  const HeaderComponent = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyle}> {"ToDo List"}</Text>
        <TouchableOpacity
          style={styles.addNewButton}
          onPress={() => navigation.navigate('AddTodo')}
        >
          <Text style={styles.addNewButtonTitile}>{"Add Todo"}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        ListHeaderComponent={<HeaderComponent />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        // onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    padding: vs(10)
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: s(10),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleStyle: {
    color: 'white',
    fontSize: ms(16),
    fontWeight: "bold"
  },
  addNewButton: {
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    width: "30%",
    padding: s(10),
    borderRadius: ms(12),
    alignSelf: "flex-end"
  },
  addNewButtonTitile: {
    color: 'black',
    fontSize: ms(14),
    fontWeight: "900"
  },
  listMainContainer: {
    marginVertical: vs(10),
    paddingHorizontal: s(10),
    paddingVertical: vs(10),
    backgroundColor: "white",
    borderRadius: ms(8),
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
    fontSize: ms(12),
    fontWeight: "500",
    color: 'grey'
  },
  valueText: {
    color: "black",
    fontSize: ms(14),
    fontWeight: '600'
  },
  deleteIconStyle: {
    width: s(20),
    height: vs(20)
  }
})