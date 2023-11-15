
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
                {isAuthenticated ? (
                    <Route index element={<Home />} />
                ) : (
                    <>
                        <Route path='/login' element={<Login />} exact/>
                        <Route path='/signup' element={<Signup />} exact/>
                    </>
                )}
                <Route path="*" element={<Home />} />
            </Routes>   
        </BrowserRouter>
    );
}

export default App;
