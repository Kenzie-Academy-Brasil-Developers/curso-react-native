import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomePage() {
   const [isReady, setIsReady] = useState(false);
   const [colorMode, setColorMode] = useState("LIGHT");

   useEffect(() => {
      if(!isReady){
         async function load(){
            const localColorMode = await AsyncStorage.getItem("@COLOR_MODE");
            if(localColorMode) {
               const parsedColorMode = JSON.parse(localColorMode);
               setColorMode(parsedColorMode);
            }
            setIsReady(true);
         }
         load();
      } else {
         AsyncStorage.setItem("@COLOR_MODE", JSON.stringify(colorMode));
      }      
   }, [colorMode])

   return (
      <View>
         <Text>{colorMode}</Text>
         <Button
            title="Modo de cor"
            onPress={() => setColorMode(colorMode === "LIGHT" ? "DARK" : "LIGHT")}
         />
      </View>
   );
}
