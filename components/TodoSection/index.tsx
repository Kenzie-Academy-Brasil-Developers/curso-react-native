import { View } from "react-native"
import { TodoCreateForm } from "./TodoCreateForm";
import { TodoList } from "./TodoList";

export interface ITodo{
    id: number;
    title: string;
    content: string;
}

export const TodoSection = () => {
    return(
        <View>
            <TodoCreateForm  />
            <TodoList />
        </View>
    )
}
