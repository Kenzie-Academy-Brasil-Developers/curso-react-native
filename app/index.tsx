import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomePage() {
   return (
      <View>
         <Text>Home Page</Text>
         <View>
            <Link href="/profile">Profile</Link>
         </View>
      </View>
   );
}
