import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutcontextProvider} from './context/Workcontext';
import { AuthContextProvider } from './context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <WorkoutcontextProvider>
    <App />
    </WorkoutcontextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


