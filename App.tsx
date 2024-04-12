import { StyleSheet, Text, View } from "react-native";

export default function App() {
   return (
      <View>
         <Text style={styles.title}>Olá mundo!</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   title: {
      fontSize: 48,
      fontWeight: "700",
   },
});
