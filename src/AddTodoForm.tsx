import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useFirebaseApp } from "./infra/FirebaseProvider";

function AddTodoForm() {
    const [todoText, setTodoText] = useState("");
    const db = useFirebaseApp();

    async function addTodo(e: any) {
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
        <form>
            <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
            <button onClick={addTodo}>Save Todo</button>
        </form>
    );
}

export default AddTodoForm;