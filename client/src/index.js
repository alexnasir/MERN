import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WorkoutcontextProvider from './context/Workcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutcontextProvider>
    <App />
    </WorkoutcontextProvider>
  </React.StrictMode>
);


