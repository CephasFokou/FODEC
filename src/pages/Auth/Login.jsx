import React from 'react'
import './style.css'

const Login = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="form-wrapper">
                    <form>
                        <h2 className='text-sm logo-wrapper'><span className='logo-first-side'>SEED</span><span className='logo-second-side'>TRACK</span></h2>
                        <div className="form-group">
                        <select className="custom-select" name="" id="">
                            <option value="" style={{color:'#'}}>Developpement varietal</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            {/* Add more options as needed */}
                        </select>
                        </div>
                        <div className="form-group">
                            <input type="tel" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="username" placeholder="Password" />
                        </div>
                        <button type="submit">Se connecter</button>
                        <div style={{display:'flex', margin:10}}>
                            <p style={{color:"#31313189", fontSize:10}}>Mot de passe oublie ? </p> 
                            <a href="" style={{fontSize:10}}> cliquez ici</a>
                        </div>
                    </form>
                </div>
                <div className="board-wrapper">
                    {/*Background image comming from the css*/}
                </div>
            </div>
        </div>
    )
}

export default Login