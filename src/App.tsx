import './App.css';
import { useEffect, useState } from 'react';

import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { useFirebaseApp } from './infra/FirebaseProvider';

type Todo = {
  id: string,
  todoText: string
}

function App() {
  const [todoText, setTodoText] = useState("");
  const db = useFirebaseApp();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [refreshRequired, setRefreshRequired] = useState(true);
  useEffect(() => {
    if(refreshRequired) {
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
    }
    setRefreshRequired(false);
  }, [db, refreshRequired]);
  
  async function addTodo(e:any){
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todoText
      });
      console.log("Document written with ID: ", docRef.id);
      setTodoText("");
      setRefreshRequired(true)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="App">
        <h1>Your Todos</h1>
        <ol>
          {todos?.map(todo => <li key={todo.id}>{todo.todoText}</li>)}
        </ol>
       <form>
         <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)}/>
         <button onClick={addTodo}>Save Todo</button>
       </form>
    </div>
  );
}

export default App;
