import { useState } from "react";

import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  TextInput,
  Button,
  Modal,
} from "react-native";

export default function GoalInput({ btnHand, closeModal, modalSt }) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  return (
    <Modal visible={modalSt} animationType="slide">
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.input}>
            <TextInput
              placeholder="Your course goal!"
              style={styles.inp}
              onChangeText={inputHandler}
              value={inputValue}
            />
          </View>
        </TouchableWithoutFeedback>
          <Button
            title="Add goal"
            onPress={() => {
              btnHand(inputValue), setInputValue(""), closeModal(false);
            }}
          />
          <Button
            title="Add goal"
            onPress={() => {
              btnHand(inputValue), setInputValue(""), closeModal(false);
            }}
          />
        <View style={styles.btnsCont}>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    flex: 1,
    marginBottom: 15
  },
  inp: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  btnsCont: {
    flex: 1,
  }
});
