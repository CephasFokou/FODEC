import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { registerUser } from '../../Redux/Reducers/AuthSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [inputErrors, setInputErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Reset input errors
    setInputErrors({
      username: '',
      email: '',
      password: '',
    });

    // Validate form inputs
    if (username === '') {
      setInputErrors((prevErrors) => ({ ...prevErrors, username: 'Enter your username' }));
      return;
    }

    if (email === '') {
      setInputErrors((prevErrors) => ({ ...prevErrors, email: 'Enter your email' }));
      return;
    }

    if (password === '') {
      setInputErrors((prevErrors) => ({ ...prevErrors, password: 'Enter your password' }));
      return;
    }

    // Dispatch the registerUser action
    await dispatch(registerUser({ username, email, password }));
  };

  return (
        <div className='border border-solid border-black bg-gray-ligth w-screen h-screen flex'>
            <div className="h-full w-1/2  flex justify-center items-center">
                <form className='flex form-wrapper flex-col items-center' onSubmit={handleFormSubmit}>
                    <h2 className='font-bold text-5xl text-center mb-6'>
                        <span className='text-dark-main'>SEED</span>
                        <span className='text-green-main'>TRACK</span>
                    </h2>
                    <div className="form-group">
                        <input
                            className='form-input'
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={handleInputChange}
                        />
                        <div className="error-message">{inputErrors.username}</div>
                    </div>
                    <div className="form-group">
                        <input
                            className='form-input'
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <div className="error-message">{inputErrors.email}</div>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className='form-input'
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <div className="error-message">{inputErrors.password}</div>
                    </div>
                    <button type="submit" className='mt-5 mb-10 bg-green-main text-white mr-2.5'>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    <div>{error && <div className="text-red-500">{error}</div>}</div>
                    <div className='flex self-center justify-center'>
                        <span className='text-gray-dark'>Already have an account? </span>
                        <Link to="/" className='text-secondary-main'>Login here</Link>
                    </div>
                </form>
            </div>
            <div className="h-full w-1/2 bg-[url('https://cdn.pixabay.com/photo/2020/06/23/06/54/dji-5331597_640.jpg')] bg-cover bg-center">
                {/*Background image coming from the CSS*/}
            </div>
        </div>
    );
};

export default Signup;
