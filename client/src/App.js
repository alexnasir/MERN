import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="pages">
      <Routes>
      <Route path="/"
      element={<Home />}
      
      >

      </Route>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
