import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { TodoContext } from "../../../providers/TodoContext";

export const TodoList = () => {
   const { todoList, removeTodo } = useContext(TodoContext);

   return (
      <View>
         {todoList.length > 0 ? (
            todoList.map((todo) => (
               <View key={todo.id}>
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
