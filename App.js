import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{flexDirection: 'row', justifyContent:'space-between', gap: 3, }}>
      <TextInput placeholder="Enter your goal: "/>
      <Button title="Add "/>
     </View>
     <View>
      <Text>Goals Loading...</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  dummyText: {
    alignItems: "flex-start",
    flex: 0,
    fontSize: 16,
    fontFamily: 'apple',
    color: 'green'
  }
});
