import { useContext, useState } from "react";
import { StyleSheet, SafeAreaView, TextInput, Button } from "react-native";
import { TodoContext } from "../../../providers/TodoContext";

export const TodoCreateForm = () => {
   const { addTodo } = useContext(TodoContext);

   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");

   const handlePress = () => {
      addTodo(title, content);
      setTitle("");
      setContent("");
   };

   return (
      <SafeAreaView>
         <TextInput
            style={styles.field}
            value={title}
            onChangeText={setTitle}
            placeholder="Crie um título"
         />
         <TextInput
            style={styles.field}
            editable
            multiline
            numberOfLines={4}
            value={content}
            onChangeText={setContent}
            placeholder="Forneça um conteúdo"
         />
         <Button title="Criar nota" onPress={handlePress} />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   field: {
      padding: 20,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#000000",
   },
});
