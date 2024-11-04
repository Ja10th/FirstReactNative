import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.dummyText}
      >
        My name is James
      </Text>
      <Button title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    alignItems: "flex-start",
    flex: 0,
    fontSize: 16,
    fontFamily: 'apple',
  }
});
