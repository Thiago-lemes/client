import React, { useState } from "react";
import './Login.css'
import padlock from '../../assets/padlock.png'
import user from '../../assets/key.png'
import { Link, useNavigate } from 'react-router-dom'

import api from '../../Services/api'




export default function Login() {
    const [username, setUsername] = useState('')
    const [password, SetPassword] = useState('')

    const history = useNavigate()

    async function login(e) {
        e.preventDefault();

        const data = {
            username,
            password
        };
        try {
            const response = await api.post('auth/singnin', data);
            localStorage.setItem('username', username)
            localStorage.setItem('acecessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)            

            navigator.push('/books')
        } catch (error) {
            alert('Login failed! try again')
            
        }
    }
    return (
        <div className="login-container">
            <section className="form">
                <img src={user} alt="login" />
                <form onSubmit={login}>
                    <h1>Acesse sua conta</h1>
                    <input
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value) }
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => SetPassword(e.target.value) }
                    />
                    <Link className="button" >ADD NEW BOOK</Link>
                </form>
            </section>

            <img src={padlock} alt="login" />
        </div>
    )
}