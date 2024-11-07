import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [words, setWords] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  const handleGoalInput = (enteredText) => {
    setWords(enteredText);
  };
  const handleAddGoal = () => {
    setMyGoals((currentMyGoals) => [...currentMyGoals, words]);
    setWords("");
  };

  const handleRemove = (index) => {
    setMyGoals((currentMyGoals) =>
      currentMyGoals.filter((_, goalIndex) => goalIndex !== index)
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 3,
          alignItems: "center",
          marginBottom: 24,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          flex: 1,
        }}
      >
        <TextInput
          style={styles.textInput}
          value={words}
          placeholder="Enter your goal: "
          onChangeText={handleGoalInput}
        />
        <Button title="Add Goal " onPress={handleAddGoal} />
      </View>
      <View style={{ flex: 5 }}>
        <ScrollView>
          {myGoals.map((goal, index) => (
            <View
              key={index}
              style={{
                padding: 12,
                backgroundColor: "blue",
                marginBottom: 8,
                borderRadius: 12,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ paddingVertical: 2, color: "white" }}>{goal}</Text>
              <Text onPress={() => handleRemove(index)}>Remove</Text>
            </View>
          ))}
        </ScrollView>
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
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});
