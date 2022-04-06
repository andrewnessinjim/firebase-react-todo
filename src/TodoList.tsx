import { collection, onSnapshot, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useFirebaseApp } from "./infra/FirebaseProvider";

type Todo = {
    id: string,
    todoText: string
}

const TodoOl = styled.ol`
flex: 1;
list-style: none;
`;

const TodoLi = styled.li`
  padding  : 10px;
`;

function TodoList() {
    const db = useFirebaseApp();
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
      const unsub = onSnapshot(query(collection(db, "todos")), collection => {
        const todos:Todo[] = [];
        collection.forEach((doc) => {
          todos.push({todoText: doc.data().todoText, id :doc.id});
        });
        setTodos(todos);
      });

      return unsub;
      }, [db]);

    return (
    <TodoOl>
        {todos?.map(todo => <TodoLi key={todo.id}>{todo.todoText}</TodoLi>)}
    </TodoOl>)
}

export default TodoList;