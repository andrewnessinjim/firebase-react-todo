import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { useFirebaseApp } from "./infra/FirebaseProvider";

const TodoInput = styled.input`
    padding: 10px;
    font-size: 1rem;
    flex: 1;
    margin-right: 10px;
`;

const TodoFormContainer = styled.div`
  width  : 100%;
  display: flex;
  justify-content: center;
`;

const TodoForm = styled.form`
    display: flex;
    width: 65%;
`;

function AddTodoForm() {
    const [todoText, setTodoText] = useState("");
    const db = useFirebaseApp();

    async function addTodo(e: any) {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "todos"), {
                todoText,
                created: new Date()
            });
            console.log("Document written with ID: ", docRef.id);
            setTodoText("");

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <TodoFormContainer>
            <TodoForm>
                <TodoInput type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
                <button onClick={addTodo}>Save Todo</button>
            </TodoForm>
        </TodoFormContainer>
    );
}

export default AddTodoForm;