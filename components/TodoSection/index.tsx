import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { TodoCreateForm } from "./TodoCreateForm";

interface ITodo{
    id: number;
    title: string;
    content: string;
}

export const TodoSection = () => {
    const [id, setId] = useState(1);
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const addTodo = (title: string, content: string) => {
        const newTodo: ITodo = { id, title, content };
        setTodoList((todoList) => [...todoList, newTodo]);
        setId((id) => id + 1);
    }

    const removeTodo = (id: number) => {
        setTodoList((todoList) => todoList.filter(todo => todo.id !== id));
    }

    return(
        <View>
            <TodoCreateForm addTodo={addTodo} />
        </View>
    )
}
