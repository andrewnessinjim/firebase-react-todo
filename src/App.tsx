import { useState } from 'react';

import { collection, addDoc} from "firebase/firestore"; 
import { useFirebaseApp } from './infra/FirebaseProvider';

import styled from 'styled-components/macro';
import TodoList from './TodoList';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

function TodoApp() {
  const [todoText, setTodoText] = useState("");
  const db = useFirebaseApp();
  
  async function addTodo(e:any){
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todoText
      });
      console.log("Document written with ID: ", docRef.id);
      setTodoText("");
  
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <AppDiv>
        <h1>Your Todos</h1>
        <TodoList/>
       <form>
         <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)}/>
         <button onClick={addTodo}>Save Todo</button>
       </form>
    </AppDiv>
  );
}

export default TodoApp;
