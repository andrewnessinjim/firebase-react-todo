import React, {ReactNode, useContext, useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";


import { connectFirestoreEmulator, Firestore, getFirestore} from "firebase/firestore";

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const FirebaseAppContext = React.createContext<any>(null);

const firebaseConfig = {
    projectId: "demo-react-todo",
};


export const useFirebaseApp = () => {
    const firebaseModules = useContext(FirebaseAppContext);
    return firebaseModules;
}

type FirebaseProviderProps = {
    children: ReactNode
}
export function FirebaseAppProvider({children}: FirebaseProviderProps) {
    const app = initializeApp(firebaseConfig);
    const [db, setDb] = useState<Firestore|null>(null);
    const [ui, setUi] = useState<any>(null);

    useEffect(()=>{
        async function setupFirestore() {
            const db =getFirestore(app);
            connectFirestoreEmulator(db, 'localhost', 8080);
            setDb(db)
        }

        async function setupUi() {
            const auth = getAuth(app);
            connectAuthEmulator(auth, "http://localhost:9099");

            if(firebaseui.auth.AuthUI.getInstance()) {
                setUi(firebaseui.auth.AuthUI.getInstance())
              } else {
                setUi(new firebaseui.auth.AuthUI(auth))
              }
        }

        setupFirestore();
        setupUi();
    }, [app]);
    
    
    return (
        <FirebaseAppContext.Provider value={{db, ui}}>
            {children}
        </FirebaseAppContext.Provider>
    )
}