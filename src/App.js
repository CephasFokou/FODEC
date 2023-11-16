
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import Signup from './pages/Auth/Signup';

function App() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    console.log('isAuthenticated', isAuthenticated);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={(isAuthenticated?<Home/>:<Login/>)}/>
                <Route path='/signup' element={<Signup />}/>
            </Routes>   
        </BrowserRouter>
    );
}

export default App;
