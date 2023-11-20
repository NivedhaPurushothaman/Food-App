// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as BrowserRouter,Routes,Route,} from 'react-router-dom';

import Login from './components/Login/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
