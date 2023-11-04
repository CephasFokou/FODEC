
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/Auth/Signup';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  index element={<Home />}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup />}/>
                {/* Catch-all route for 404 Not Found */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
