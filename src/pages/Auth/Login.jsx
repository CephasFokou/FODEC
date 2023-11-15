import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { loginUser } from '../../Redux/Reducers/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const { username, password } = formData;

    const handleInputChange = (e) => {
        setUsernameError('');
        setPasswordError('');
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (username === '') {
            setUsernameError('Enter your username');
        } else if (password === '') {
            setPasswordError('Enter your password');
        } else {
            const data = {
                username: username,
                password: password,
            };

            try {
                const response = await dispatch(loginUser(data));
                if (response.meta.requestStatus === 'fulfilled') {
                    navigate('/home');
                } else if (response.meta.requestStatus === 'rejected') {
                    alert(response);
                }
            } catch (error) {
                console.error('An error occurred during login:', error);
            }
        }
    };

    return (
        <div className='border border-solid border-black bg-gray-ligth w-screen h-screen flex'>
        <div className='h-full w-1/2  flex justify-center items-center'>
            <form className='flex  form-wrapper flex-col items-center' onSubmit={handleFormSubmit}>
                <h2 className='font-bold text-5xl text-center mb-6'>
                    <span className='text-dark-main'>SEED</span>
                    <span className='text-green-main'>TRACK</span>
                </h2>
                <div className='form-group'>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={username}
                        onChange={handleInputChange}
                        onFocus={() => setUsernameError('')}
                    />
                </div>
                <div>{usernameError}</div>
                <div className='form-group'>
                    <input
                        type='password'
                        className='form-input'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={handleInputChange}
                        onFocus={() => setPasswordError('')}
                    />
                </div>
                <div>{passwordError}</div>
                <button type='submit' className='mt-5 mb-10 bg-green-main text-white mr-2.5'>
                    {loading ? 'Logging In...' : 'Login'}
                </button>
                {error && <div className='text-red-500'>{error}</div>}
                <div className='flex self-center justify-center'>
                    <span className='text-gray-dark'>Forgot your password? </span>
                    <Link to='/signup'>Click here</Link>
                </div>
            </form>
        </div>
            <div className='h-full w-1/2 bg-[url("https://cdn.pixabay.com/photo/2020/06/23/06/54/dji-5331597_640.jpg")] bg-cover bg-center'>
                {/* Background image coming from the CSS */}
            </div>
        </div>
    );
};

export default Login;
