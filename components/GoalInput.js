import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({words, handleGoalInput, handleAddGoal}) {
  return (
    <View style={styles.GoalInput}>
      <TextInput
        style={styles.textInput}
        value={words}
        placeholder="Enter your goal: "
        onChangeText={handleGoalInput}
      />
      <Button title="Add Goal " onPress={handleAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  GoalInput: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 3,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});
