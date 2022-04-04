import React, {ReactNode, useContext, useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, Firestore, getFirestore} from "firebase/firestore";


const FirebaseAppContext = React.createContext<any>(null);

const firebaseConfig = {
    projectId: "demo-react-todo",
};


export const useFirebaseApp = () => {
    const fireStore = useContext(FirebaseAppContext);
    if(!fireStore) {
        throw new Error(
            `You must call useFirebaseApp() inside of a <FirebaseAppProvider />`
        );
    }

    return fireStore;
}

type FirebaseProviderProps = {
    children: ReactNode
}
export function FirebaseAppProvider({children}: FirebaseProviderProps) {
    const app = initializeApp(firebaseConfig);
    const [db, setDb] = useState<Firestore|null>(null);

    useEffect(()=>{
        async function setupFirestore() {
            const db =getFirestore();
            connectFirestoreEmulator(db, 'local-firebase', 8080);
            setDb(db)
        }
        setupFirestore();
    }, [app]);
    
    
    return (
        !db ? <></>
        :
        <FirebaseAppContext.Provider value={db}>
            {children}
        </FirebaseAppContext.Provider>
    )
}