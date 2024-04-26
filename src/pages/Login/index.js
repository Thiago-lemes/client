import React from "react";
import './Login.css'
import padlock from '../../assets/padlock.png'
import user from '../../assets/key.png'
import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={user} alt="login" />
                <form>
                    <h1>Acesse sua conta</h1>
                    <input placeholder="Username" />
                    <input type="passaword" placeholder="password" />
                    
                    <Link className="button" to="/Books">ADD NEW BOOK</Link>
                </form>
            </section>

            <img src={padlock} alt="login" />
        </div>
    )
}