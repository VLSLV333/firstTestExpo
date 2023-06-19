import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalWrapper}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={() => {
          onDeleteItem(id);
        }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.listText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalWrapper: {
    margin: 10,
    borderRadius: 7,
    backgroundColor: "#5e0acc",
  },
  listText: {
    color: "white",
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
