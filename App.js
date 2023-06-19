import { useState } from "react";

import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsArray, setGoalsArray] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);

  const buttonHandler = (val) => {
    if (val.trim().length === 0) {
      return;
    }
    setGoalsArray((prevState) => [
      ...prevState,
      { id: Math.random().toString(), inputValue: val },
    ]);
  };

  const deleteHandler = (givenId) => {
    setGoalsArray((state) => state.filter((obj) => obj.id !== givenId));
  };

  return (
    <View style={styles.container}>
      <Button
        title="add new goal"
        color="#5e0acc"
        onPress={() => setModalOpened(true)}
        style={styles.btnShow}
      />
      <GoalInput
        btnHand={buttonHandler}
        closeModal={setModalOpened}
        modalSt={modalOpened}
      />
      <View style={styles.list}>
        <FlatList
          data={goalsArray}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.inputValue}
                onDeleteItem={deleteHandler}
                id={itemData.item.id}
              />
            );
          }}
        />
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
  btnShow: {
    flex: 5,
  },
  list: {
    flex: 5,
  },
});
