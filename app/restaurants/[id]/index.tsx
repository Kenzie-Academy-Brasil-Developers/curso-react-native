import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { restaurantList } from "../../../data/restaurants";

export default function RestaurantPage(){
    const params = useLocalSearchParams();

    const restaurant = restaurantList.find(restaurant => restaurant.id === Number(params.id));

    return(
        <View>
            <Text>{restaurant?.name}</Text>
        </View>
    )
}