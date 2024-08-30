import {Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'; 
import Homepage from '../src/pages/home/home';
import LayoutPage from '../src/pages/layout/layout';
import ListPage  from './pages/list/list';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path='/' element={<LayoutPage/>}>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/' element={<ListPage/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
