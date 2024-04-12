import { StyleSheet, Text, View } from "react-native";
import { TodoSection } from "./components/TodoSection";
import { TodoProvider } from "./providers/TodoContext";

export default function App() {
   return (
      <TodoProvider>
         <View>
            <TodoSection />
         </View>
      </TodoProvider>
   );
}

const styles = StyleSheet.create({
   title: {
      fontSize: 48,
      fontWeight: "700",
   },
});
