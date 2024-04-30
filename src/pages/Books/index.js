import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';
import remove from '../../assets/delete.png';
import bookImg from '../../assets/dictionary.png';
import edit from '../../assets/edit.png';
import shutdown from '../../assets/shutdown.png';
import './Books.css';

import api from '../../Services/api';


export default function Books() {

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);

    const navigator = useNavigate();
    const accesToken = localStorage.getItem('acecessToken');
    const username = localStorage.getItem('username');

    const authorization = {
        Headers: {
            Authorization: `Bearer ${accesToken}`
        }
    };

    useEffect(() => {
        fetMoreBooks();
    }, [accesToken])

    async function fetMoreBooks() {
        const response = await api.get(`'auth/book/v1?page=${page}&limit=4&direction=asc'`, authorization)
        setBooks([...books, ...response.data._embedded.bookVOes])
        setPage(page +1)
        
    }

    async function editBook(id) {
        try {
            navigator(`/book/new/${id}`, authorization)
        } catch (error) {
            alert('edit failed')
        }
    }

    async function deleteBook(id) {
        try {
            api.delete(`api/book/v1/${id}`, authorization)
            setBooks(books.filter(book => book.id !== id))
        } catch (error) {
            alert('delete failed')
        }
    }

    async function logout() {
        try {
            localStorage.clear();
            navigator('/')
        } catch (error) {
            alert('logout failed')
        }
    }

    // async function createNewBook(e) {
    //     e.preventDefault();

    //     const data = {
    //         author,
    //         launchDate,
    //         price,
    //         title
    //     };
    //     try {
    //         await api.post('auth/book/v1', data, authorization);
    //         navigator.push('/books')
    //     } catch (error) {
    //         alert('Login failed! try again')
    //     }
    //     navigator('/books')
    // }

    return (
        <div className="book-container">
            <header>
                <img src={bookImg} alt="book" />
                <span>Bem Vindo, <strong>{username?.toUpperCase()}</strong></span>
                <Link className="button" to="/book/new/0">ADD NEW BOOK</Link>
                <button onClick={logout} type="button">
                    <img src={shutdown} alt="book" />
                </button>
            </header>

            <h1> Rigistre um Livro</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>Titulo</strong>
                        <p>{book.title}</p>
                        <strong>Autor</strong>
                        <p>{book.author}</p>
                        <strong>Preço</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)}</p>
                        <strong>Lançamento</strong>
                        <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>
                        <button onClick={()=> editBook(book.id)}type="button">
                            <img src={edit} />
                        </button>
                        <button onClick={() => deleteBook(book.id)} type="button">
                            <img src={remove} />
                        </button>
                    </li>
                ))}
            </ul>
            <button className="button" onClick={fetMoreBooks} type="button">Load More</button>
        </div>
    )
}