import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../components/styles';
import {
  handleAddItem,
  handleDeleteItem,
  handleResetList,
  handleCheckItem,
} from '../components/functions';

const Todolist = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    handleAddItem(inputText, items, setItems, setInputText);
  };

  const deleteItem = index => {
    handleDeleteItem(index, items, setItems);
  };

  const resetList = () => {
    handleResetList(setItems);
  };

  const checkItem = index => {
    handleCheckItem(index, items, setItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>TO DO LIST</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={addItem}
        blurOnSubmit={false}
      />

      <FlatList
        data={items}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => checkItem(index)}>
              <Text style={[styles.item, item.checked && styles.checkedItem]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItem(index)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity onPress={resetList}>
        <Text style={styles.resetButton}>Reset List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todolist;
