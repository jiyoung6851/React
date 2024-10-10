// import logo from './logo.svg';
// import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './componets/Header';
import Home from './pages/Home';
import JoinForm from './user/JoinForm';
import LoginForm from './user/LoginForm';
import SaveForm from './pages/book/SaveForm';
import Detail from './pages/book/Detail';
import UpdateForm from './pages/book/UpdateForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/joinForm' element={<JoinForm/>} />
        <Route path='/loginForm' element={<LoginForm/>} />
        <Route path='/saveForm' element={<SaveForm/>} />
        <Route path='/book/:id' element={<Detail/>} />
        <Route path='/updateForm/:id' element={<UpdateForm/>} />
      </Routes>
    </div>
  );
}

export default App;
