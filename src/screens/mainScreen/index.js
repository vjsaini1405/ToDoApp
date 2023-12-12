import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Color } from '../../themes';
import { ms, vs, s } from 'react-native-size-matters';
import { HeadingText, SmallText, TextField } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { todo, todoDelete, todoFilter, todoLodeMore, todoSortBy, todoToggle } from '../../redux/todo/slice';
import { styles } from './styles'

const filterOptions = ["All", "Active", "Done"]

const MainScreen = ({ navigation }) => {
  const [state, setState] = useState({
    todos: [],
    refreshing: false,
    loadingMore: false,
    page: 1,
    totalItems: 0,
    limit: 10,
    isLoadMore: false,
    isMobalVisible: false,
    allTodos: []
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.counterContainer}>
          <SmallText
            textFieldStyle={{ color: Color.black, fontWeight: '700' }}
          >{`Total: ${totalItems}`}</SmallText>
        </View>
      )
    });
  }, [navigation]);

  const dispatch = useDispatch();

  const { todoList, totalItems } = useSelector(state => state.todoReducer); // Replace with the correct slice name


  useEffect(() => {
    dispatch(todo(state.page));
  }, []);
  
  const handleAddNew = () => {
    navigation.navigate('AddNewScreen');
  };

  

  const handleDeleteItem = (todoId) => {
    dispatch(todoDelete(todoId))
  };

  const handleSortBy = () => {
    dispatch(todoSortBy())
  };

  const handleRefresh = () => {
    setState((prev) => ({ ...prev, refreshing: true, page: 1 }));
    dispatch(todo(state.page));
    setState((prev) => ({ ...prev, refreshing: false }));
  };

  const handleLoadMore = async () => {
    setState((prev) => ({ ...prev, isLoadMore: true }))
    if (totalItems != todoList.length) {
      setState((prev) => ({ ...prev, isLoadMore: true, page: state.page + 1 }));
      dispatch(todoLodeMore(state.page))
      setState((prev) => ({ ...prev, isLoadMore: false }));
    }
    else{
      setState((prev) => ({ ...prev, isLoadMore: false }));
    }
  };

  const handleToggale = (itemId) => {
    dispatch(todoToggle(itemId))
  }

  const listContainer = () => (
    <>
      {state.isLoadMore && <ActivityIndicator
        size={"small"}
        color={Color.white}
      />
      }
    </>
  )

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const openBottomSheet = () => {
    setState((prev) => ({ ...prev, isMobalVisible: true }))
  };

  const closeBottomSheet = () => {
    setState((prev) => ({ ...prev, isMobalVisible: false }))
  };

  const handleFilter = ({ item }) => {
    if (item == "All") {
      dispatch(todo(state.page))
      closeBottomSheet()
    }
    else {
      dispatch(todoFilter({ item }))
      closeBottomSheet()
    }
  }

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity
          onPress={() => handleToggale(item.id)}
        >
          <Image
            source={item?.completed ? require("../../assets/icons/radio.png") : require("../../assets/icons/radio-button.png")}
            style={{ width: s(15), height: vs(15), tintColor: Color.black }}
          />
        </TouchableOpacity>
        <View style={{ width: '80%' }}>
          <TextField textFieldStyle={{ color: Color.black }}>{`ID: ${item?.id}`}</TextField>
          <TextField textFieldStyle={{ color: Color.black }}>{`Title: ${item?.title}`}</TextField>
        </View>
        <TouchableOpacity onPress={() => handleDeleteItem(item?.id)}>
          <Image
            source={require('../../assets/icons/remove.png')}
            style={{ width: ms(24), height: ms(24) }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => handleSortBy()}>
          <TextField textFieldStyle={styles.buttonTextStyle}>{'Sorted By'}</TextField>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => openBottomSheet()}>
          <TextField textFieldStyle={styles.buttonTextStyle}>{'Filter'}</TextField>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => handleAddNew()}>
          <TextField textFieldStyle={styles.buttonTextStyle}>{'Add New'}</TextField>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ paddingHorizontal: s(20) }}
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(_, id) => id.toString()}
        extraData={todoList}
        refreshControl={
          <RefreshControl refreshing={state.refreshing} onRefresh={handleRefresh} />
        }
        onEndReached={async () => await handleLoadMore()}
        onEndReachedThreshold={0.1} // Adjust the threshold as needed
        ListFooterComponent={listContainer}
      />

      {state.isMobalVisible &&
        <BottomSheet
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
        >
          <TouchableOpacity
            onPress={() => closeBottomSheet()}
          >
            <Image
              source={require("../../assets/icons/remove.png")}
              style={styles.closeBottomSheetIcon}

            />
          </TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            {
              filterOptions?.map((item, index) => (
                <TouchableOpacity
                  style={{ marginTop: vs(10) }}
                  onPress={() => handleFilter({ item })}
                >
                  <HeadingText textFieldStyle={{ color: Color.black }}>{item}</HeadingText>
                </TouchableOpacity>
              ))
            }
          </View>
        </BottomSheet>
      }
    </View>
  );
};

export default MainScreen;