
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/Auth/Signup';

function App() {
    const isAuthenticated = localStorage.getItem('auth') === 'true';
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={(isAuthenticated ? <Login /> : <Home />)} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
