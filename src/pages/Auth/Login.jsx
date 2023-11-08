import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Login = () => {
    return (
        <div className='border border-solid border-black bg-gray-ligth w-screen h-screen flex'>
            <div className="h-full w-1/2  flex justify-center items-center">
                <form className='flex  form-wrapper flex-col items-center'>
                    <h2 className='font-bold text-5xl text-center mb-6'>
                        <span className='text-dark-main'>SEED</span>
                        <span className='text-green-main'>TRACK</span>
                    </h2>
                    <div className="form-group">
                    <select className="custom-select text-gray-dark" name="" id="">
                        <option value="" style={{color:'#'}}>Developpement varietal</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        {/* Add more options as needed */}
                    </select>
                    </div>
                    <div className="form-group">
                        <input className='form-input' type="tel" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-input' name="username" placeholder="Password" />
                    </div>
                    <button type="submit" className='mt-5 mb-10 bg-green-main text-white mr-2.5'>
                        <Link to="/"> Se connecter</Link>
                    </button>
                    <div className='flex self-center justify-center' >
                        <span className='text-gray-dark'>Mot de passe oublie ? </span> 
                        <a href=""  className='text-secondary-main'> cliquez ici</a>
                    </div>
                </form>
            </div>
            <div className="h-full w-1/2 bg-[url('https://cdn.pixabay.com/photo/2020/06/23/06/54/dji-5331597_640.jpg')] bg-cover bg-center">
                {/*Background image comming from the css*/}
            </div>
        </div>
    )
}

export default Login