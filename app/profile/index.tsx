import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ProfilePage() {
   return <View>
    <Text>Profile Page</Text>
    <View>
        <Link href="/">Home</Link>
    </View>
   </View>;
}
