import { StyleSheet, View } from "react-native";
import { TodoProvider } from "./providers/TodoContext";
import { Image } from "expo-image";

export default function App() {
   return (
      <TodoProvider>
         <View>
            <Image
               source={require("./assets/favicon.png")}
               style={{ width: 40, height: 40 }}
            />
            <Image
               source={require("./assets/cat.jpg")}
               style={{ width: 200, height: 300 }}
               contentFit="contain"
            />
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
