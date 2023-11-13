
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/Auth/Signup';

function App() {
    // const isAuthenticated = localStorage.getItem('isAuthenticated');
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
