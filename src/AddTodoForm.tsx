import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components/macro";
import { useFirebaseApp } from "./infra/FirebaseProvider";
import WidthWrap from "./infra/WidthWrap";

const TodoInput = styled.input`
    padding: 10px;
    font-size: 1rem;
    margin-right: 5px;
    flex: 1;
    max-width: 700px;
`;

const TodoForm = styled.form`
    display: flex;
    align-self: center;
    margin: auto;
    width: 90%;
    justify-content: center;
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
        <WidthWrap>
            <TodoForm>
                <TodoInput type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
                <button onClick={addTodo}>Save Todo</button>
            </TodoForm>
        </WidthWrap>
    );
}

export default AddTodoForm;