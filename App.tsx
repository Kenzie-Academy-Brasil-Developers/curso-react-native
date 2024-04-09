import { Button, StyleSheet, Text, View } from "react-native";
import { UserCard } from "./components/UserCard";

interface IPerson {
   id: number;
   firstName: string;
   lastName: string;
   email: string;
}

export default function App() {
   const personList: IPerson[] = [
      {
         id: 1,
         firstName: "Alex",
         lastName: "Conder",
         email: "alex@email.com",
      },
      {
         id: 2,
         firstName: "Osvaldo",
         lastName: "Silva",
         email: "osvaldo@email.com",
      },
      {
         id: 3,
         firstName: "Maria",
         lastName: "Silva",
         email: "maria@email.com",
      },
   ];

   return (
      <View>
         <Text style={styles.title}>Olá mundo!</Text>
         <Button onPress={() => console.log("Olá mundo!")} title="Saiba mais" />
         {personList.map((person) => (
            <UserCard
               key={person.id}
               firstName={person.firstName}
               lastName={person.lastName}
               email={person.email}
            />
         ))}
      </View>
   );
}

const styles = StyleSheet.create({
   title: {
      fontSize: 48,
      fontWeight: "700",
   },
});
