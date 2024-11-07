import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [words, setWords] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  const handleGoalInput = (enteredText) => {
    setWords(enteredText);
  };
  const handleAddGoal = () => {
    setMyGoals((currentMyGoals) => [
      ...currentMyGoals,
      { text: words, key: Math.random().toString() },
    ]);
    setWords("");
  };

  const handleRemove = (index) => {
    setMyGoals((currentMyGoals) =>
      currentMyGoals.filter((_, goalIndex) => goalIndex !== index)
    );
  };
  return (
    <View style={styles.container}>
      <GoalInput
        words={words}
        handleAddGoal={handleAddGoal}
        handleGoalInput={handleGoalInput}
      />
      <View style={{ flex: 5 }}>
        <FlatList
          data={myGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                handleRemove={handleRemove}
                index={itemData.index}
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
    backgroundColor: "#eee",
  },
});
