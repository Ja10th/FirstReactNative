import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, handleRemove, index }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => (pressed ? styles.pressed : styles.pressable)}
      >
        <Text style={{ paddingVertical: 2, color: "white" }}>{text}</Text>
        <Text onPress={() => handleRemove(index)} style={{color: 'red'}}>Remove</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "blue",
    marginBottom: 8,
    borderRadius: 12,
  },
  pressed: {
   backgroundColor: 'darkblue',
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  pressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
    padding: 12,
    alignItems: "center",
  },
});
