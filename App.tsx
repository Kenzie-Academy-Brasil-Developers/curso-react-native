import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import Slider from "@react-native-community/slider";

export default function App() {
   const [isChecked, setIsChecked] = useState(false);
   const [sliderValue, setSliderValue] = useState(0);

   return (
      <View>
         <Text>{isChecked ? "Ativo" : "Inativo"}</Text>
         <Text>Ativar comportamento</Text>
         <Checkbox value={isChecked} onValueChange={setIsChecked} />
         <Text>Volume: {sliderValue}</Text>
         <Slider
            style={{ width: 200, height: 6, marginTop: 20 }}
            value={sliderValue}
            onValueChange={setSliderValue}
            minimumValue={0}
            maximumValue={100}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   title: {
      fontSize: 48,
      fontWeight: "700",
   },
});
