import { useState } from 'react';

import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  TextInput,
  Button,
  Modal,
  Image
} from 'react-native';

export default function GoalInput({ btnHand, closeModal, modalSt }) {
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  return (
    <Modal visible={modalSt} animationType="slide" >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.input}>
            <Image source={require('../assets/image/goal.png')} style={styles.image}/>
            <TextInput
              placeholder="Your course goal!"
              style={styles.inp}
              onChangeText={inputHandler}
              value={inputValue}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.btnsCont}>
        <Button
            title="Back to list"
            onPress={() => {
              setInputValue(''), closeModal(false);
            }}
            color='#f31282'
          />
          <Button
            title="Add goal"
            onPress={() => {
              btnHand(inputValue), setInputValue('');
            }}
            color='#b180f0'
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#311b6b',
    alignItems: 'center'
  },
  input: {
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    flex: 1,
    marginBottom: 15,
    width: '100%'
  },
  inp: {
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 7,
    borderWidth: 1,
    padding: 10,
  },
  btnsCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
