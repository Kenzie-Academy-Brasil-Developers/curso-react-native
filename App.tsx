import { StyleSheet, Text, View } from "react-native";
import { TodoSection } from "./components/TodoSection";

export default function App() {
   return (
      <View>
         <TodoSection />
      </View>
   );
}

const styles = StyleSheet.create({
   title: {
      fontSize: 48,
      fontWeight: "700",
   },
});
