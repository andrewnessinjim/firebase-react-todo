import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TodoApp from './app/App';
import { FirebaseAppProvider } from './infra/FirebaseProvider';


const container = document.getElementById('root');
if(container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <FirebaseAppProvider>
          <TodoApp />
      </FirebaseAppProvider>
    </React.StrictMode>
  );
}