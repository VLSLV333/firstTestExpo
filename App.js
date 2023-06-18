import { useState } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [goalsArray, setGoalsArray] = useState([]);

  const inputHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  const buttonHandler = () => {
    if (inputValue.trim().length === 0) {
      return;
    }
    setGoalsArray((prevState) => [...prevState, {id: Math.random().toString(), inputValue}]);
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.inputButton}>
          <TextInput
            placeholder="Your course goal!"
            style={styles.inp}
            onChangeText={inputHandler}
            value={inputValue}
          />
          <Button title="Add goal" onPress={buttonHandler} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.list}>
        <FlatList data={goalsArray} keyExtractor={(item) => item.id} renderItem={itemData => {
          return (
              <View style={styles.goalWrapper}>
                <Text style={styles.listText}>{itemData.item.inputValue}</Text>
              </View>
          )
        }} alwaysBounceVertical={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
  },
  inp: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    width: '77%',
  },
  list: {
    flex: 5,
  },
  goalWrapper: {
    margin: 10,
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#5e0acc',
  },
  listText: {
    color: 'white',
  },
});
