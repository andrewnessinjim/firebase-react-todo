import React from 'react';

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useFirebaseApp } from "../infra/FirebaseProvider";
import WidthWrap from "../infra/WidthWrap";

type Todo = {
    id: string,
    todoText: string
}

const TodoOl = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TodoLi = styled.li`
  padding: 10px;
`;

const TodoTitle = styled.h1`
  font-size: 1.2rem;
  background-color: #555;
  padding: 10px;
  width: 100%;
  text-align: center;
`;

function TodoList() {
    const {db} = useFirebaseApp();
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
      if(db) {
        const unsub = onSnapshot(query(collection(db, "todos"), orderBy("created")), collection => {
          const todos:Todo[] = [];
          collection.forEach((doc) => {
            todos.push({todoText: doc.data().todoText, id :doc.id});
          });
          setTodos(todos);
        });
        return unsub;
      }
      }, [db]);

    return (<>
      <WidthWrap>
        <TodoTitle>Current Todos</TodoTitle>
      </WidthWrap>
      <WidthWrap>
        <TodoOl>
            {todos.map(todo => <TodoLi key={todo.id}>{todo.todoText}</TodoLi>)}
        </TodoOl>
      </WidthWrap>
    </>)
}

export default TodoList;