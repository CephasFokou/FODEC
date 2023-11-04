import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="form-wrapper">
                    <form>
                        <h2 className='text-sm logo-wrapper'><span className='logo-first-side'>SEED</span><span className='logo-second-side'>TRACK</span></h2>
                        <div className="form-group">
                        <select className="custom-select" name="" id="">
                            <option value="" style={{color:'#'}}>Selectionner le type d'activite</option>
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
                        <button type="submit"><Link to={"/"}>S'enregistrer</Link></button>
                        <div style={{display:'flex', margin:10}}><p style={{color:"#31313189", fontSize:10}}>J'ai deja un compte ! </p> <span style={{fontSize:10}}><Link to={"/login"}> cliquez ici</Link></span></div>
                    </form>
                </div>
                <div className="board-wrapper">
                    {/*Background image comming from the css*/}
                </div>
            </div>
        </div>
    )
}

export default Signup;