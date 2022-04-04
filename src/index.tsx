import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TodoApp from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from './infra/FirebaseProvider';
import styled from 'styled-components/macro';

const SiteContainerDiv = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: center;
  height: 100%;
`
const container = document.getElementById('root');
if(container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <FirebaseAppProvider>
        <SiteContainerDiv>
          <TodoApp />
        </SiteContainerDiv>
      </FirebaseAppProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
