import { View, Text, Button } from "react-native";
import { ITodo } from "..";

interface Props {
   todoList: ITodo[];
   removeTodo: (id: number) => void;
}

export const TodoList = ({ todoList, removeTodo }: Props) => {
   return (
      <View>
         {todoList.length > 0 ? (
            todoList.map((todo) => (
               <View>
                  <Text>{todo.title}</Text>
                  <Text>{todo.content}</Text>
                  <Button onPress={() => removeTodo(todo.id)} title="Remover nota" />
               </View>
            ))
         ) : (
            <Text>Cadastre sua primeira nota.</Text>
         )}
      </View>
   );
};
