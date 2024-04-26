import React, { useState } from 'react'; 
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import newBook from '../../assets/notebook.png'

import './style.css'
import api from '../../Services/api'



export default function NewBook() {

    const [author, setAuthor] = useState('')
    const [launchDate, setLaunchDate] = useState('')
    const [price, setPrice] = useState('')
    const [title, setTitle] = useState('')

    const history = useNavigate()
    const accesToken = localStorage.getItem('acecessToken')
    const authorization = {
        Headers: {
            Authorization: `Bearer ${accesToken}` 
        }
    };


    async function createNewBook(e) {
        e.preventDefault();

        const data = {
            author,
            launchDate,
            price,
            title
        };
        try {
           await api.post('auth/book/v1', data, authorization);
            navigator.push('/books')
        } catch (error) {
            alert('Login failed! try again')
        }
        history.push('/books')
    }

    
    return (
        <div className='new-book-container'>
            <div className='content'>
                <section className='form'>
                    <img src={newBook} alt='note book' />
                    <h1>ADD NEW BOOK</h1>
                    <p>Cadastre as informações do livro e click em 'ADD'!</p>
                    <Link className='back-link' to="/Books">
                        <FiArrowLeft size={16} color='#670AA6'/>
                        HOME
                    </Link>
                </section>
                <form onSubmit={createNewBook}>
                    <input
                        placeholder='Titulo'
                        value={title}
                        onChange={e => setTitle(e.target.value) }
                    />
                    <input
                        placeholder='Autor'
                        value={author}
                        onChange={e => setAuthor(e.target.value) }
                    />
                    <input
                        type='date'
                        placeholder='Preço'
                        value={price}
                        onChange={e => setPrice(e.target.value) }
                    />
                    <input
                        placeholder='Lançamento'
                        value={launchDate}
                        onChange={e => setLaunchDate(e.target.value) }
                    />
                    <button className='button' type='submit'>ADD</button>
                </form>
            </div>
        </div>
    )
}