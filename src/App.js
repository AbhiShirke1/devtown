import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage';
import {Route, Routes} from 'react-router-dom';
import Details from './Components/Details';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/:id' element={<Details />}/>
    </Routes>
  );
}

export default App;
