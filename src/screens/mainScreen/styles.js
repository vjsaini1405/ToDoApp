import { StyleSheet } from "react-native";
import { Color } from "../../themes";
import {s,vs,ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.black,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingVertical: vs(10)
    },
    counterContainer: {
      backgroundColor: Color.white,
      alignItems: 'center',
      paddingHorizontal: s(5),
      borderRadius: ms(8)
    },
    listContainer: {
      backgroundColor: Color.white,
      marginTop: vs(10),
      paddingHorizontal: s(10),
      paddingVertical: vs(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: ms(8),
      alignItems: 'center'
    },
    buttonStyle: {
      backgroundColor: Color.white,
      paddingHorizontal: s(10),
      paddingVertical: vs(5),
      borderRadius: ms(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTextStyle: {
      color: Color.black,
      fontWeight: '600',
    },
    closeBottomSheetIcon:{ 
      width: ms(24), 
      height: ms(24), 
      alignSelf: 'flex-end', 
    marginRight: s(15) }
  });