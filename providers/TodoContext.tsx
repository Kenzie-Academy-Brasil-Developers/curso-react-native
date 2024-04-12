import { createContext, useState } from "react";
import { ITodo } from "../components/TodoSection";

interface Context{
    todoList: ITodo[];
    addTodo: (title: string, content: string) => void;
    removeTodo: (id: number) => void;
}

export const TodoContext = createContext({} as Context);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
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
        <TodoContext.Provider value={{ todoList, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    )
}