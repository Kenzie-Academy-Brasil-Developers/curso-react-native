import { Text, View } from "react-native"

interface Props{
    firstName: string;
    lastName: string;
    email: string;
}

export const UserCard = ({ firstName, lastName, email }: Props) => {
    return(
        <View>
            <Text>{`${firstName} ${lastName}`}</Text>
            <Text>{email}</Text>
        </View>
    )
}