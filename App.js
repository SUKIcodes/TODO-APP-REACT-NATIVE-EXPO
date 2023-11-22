import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Task from "./src/Task";

export default function App() {
  return (
    <View>
      <Task />
      <StatusBar style="auto" />
    </View>
  );
}
