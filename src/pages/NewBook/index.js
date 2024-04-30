import React, { useState, useEffect } from 'react'; 
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import newBook from '../../assets/notebook.png'

import './style.css'
import api from '../../Services/api'



export default function NewBook() {

    const [id, setId] = useState('')
    const [author, setAuthor] = useState('')
    const [launchDate, setLaunchDate] = useState('')
    const [price, setPrice] = useState('')
    const [title, setTitle] = useState('')

    const { bookId } = useParams();

    const navigator = useNavigate()
    const accesToken = localStorage.getItem('acecessToken')
    const authorization = {
        Headers: {
            Authorization: `Bearer ${accesToken}` 
        }
    };


    useEffect(() => { 
        if (bookId === 0) return;
        else loadBooks();
    }, [bookId]);

    async function loadBooks() {
        try {
            const responde = await api.get(`api/book/v1/${bookId}`, authorization);
            let adjustDate = responde.data.launchDate.split("T", 10)[0]

            setId(responde.data.id)
            setTitle(responde.data.title)
            setAuthor(responde.data.author)
            setPrice(responde.data.price)
            setLaunchDate(adjustDate)
        } catch (error) {
            alert('erro ao carregar os dados')
            navigator('/books')
        }
    }


    async function saveOrUpdate(e) {
        e.preventDefault();

        const data = {
            author,
            launchDate,
            price,
            title
        };
        try {
            if (bookId == 0) { 
                await api.post('auth/book/v1', data, authorization);
            } else {
                data.id = bookId
                await api.put('auth/book/v1', data, authorization);
            }
        } catch (error) {
            alert('Login failed! try again')
        }
        navigator('/books')
    }

    
    return (
        <div className='new-book-container'>
            <div className='content'>
                <section className='form'>
                    <img src={newBook} alt='note book' />
                    <h1>{bookId === '0'? 'ADD NEW': 'UPDATE'} BOOK</h1>
                    <p>Cadastre as informações do livro e click em {bookId === '0'? `'ADD NEW'`: `'UPDATE'`}!</p>
                    <Link className='back-link' to="/Books">
                        <FiArrowLeft size={16} color='#670AA6'/>
                        HOME
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
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
                    <button className='button' type='submit'>{bookId === '0'? 'ADD NEW': 'UPDATE'}</button>
                </form>
            </div>
        </div>
    )
}