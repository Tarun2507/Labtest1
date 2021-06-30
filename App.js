import React,{useState} from 'react';
import { Alert, FlatList, Button,StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createAppContainer } from '@react-navigation/stack';
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   paddingLeft : 15,
   paddingRight : 15
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  const [value, setValue] = React.useState('');
  const [items, setItems] = useState([]);
  const [sortDown, setSortDown] = useState(true)
  const [sorts, setSorts] = useState(true)
  function onClicking() {
    //console.log('hey')
   setItems([...items,value])
   console.log(items)
   setValue('')
   if(items.length == 5) {
     alert(items)
     setSorts(false)
   }
   // sortItems()
  }
  function onSort() {
    const copy = [...items] // create copy of cases array (new array is created each time function is called)
    if(sortDown){
      copy.sort()
      copy.reverse()
    } else {
      copy.sort()
    }
    setSortDown(!sortDown); // set new value for sortDown
    setItems(copy); 
  }
  function onClear() {
   setItems([])
   setSorts(true)
  }
  return (
    <View style={styles.container}>
      <TextInput editable = {sorts}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom : 40 }}
      onChangeText={text => setValue(text)}
      value={value}
    />

     <Button onPress={() => onClicking()} style = {styles.container}
          title="Add Country"
        />
         <FlatList hide = {sorts}
        data={items}
        renderItem={
          ({item}) => 
            <Text style={styles.item}>
            { sorts ? '' : item}
            </Text>
         }
      />
      <Button onPress={() => onSort()}  title="Sort"></Button>
      <Button onPress={() => onClear()}  title="Clear"></Button>
    </View>
  );
} 

export default FlatListBasics;