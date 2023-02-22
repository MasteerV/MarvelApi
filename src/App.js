import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Global from './componentes/Global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Global/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
