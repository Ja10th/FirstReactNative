import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({text}) => {
  return (
    <View style={styles.goalItem}>
      <Text style={{ paddingVertical: 2, color: "white" }}>
        {text}
      </Text>
      <Text onPress={() => handleRemove(itemData.index)}>Remove</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 12,
    backgroundColor: "blue",
    marginBottom: 8,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
