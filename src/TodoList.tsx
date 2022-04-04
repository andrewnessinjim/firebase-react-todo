import { collection, getDocs } from "firebase/firestore";
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
        (async function() {
            const uiTodos:Todo[] = [];
            try {
              const dbTodos = (await getDocs(collection(db, "todos")));
              dbTodos.forEach(doc => uiTodos.push({todoText: doc.data().todoText, id:doc.id}));
              setTodos(uiTodos);
            } catch(e) {
              console.log("Error fetching documents", e)
            }
          })();
      });

    return (
    <TodoOl>
        {todos?.map(todo => <TodoLi key={todo.id}>{todo.todoText}</TodoLi>)}
    </TodoOl>)
}

export default TodoList;