import React from "react";
import { Link } from 'react-router-dom';
import './Book.css'
import bookImg from '../../assets/dictionary.png'
import shutdown from '../../assets/shutdown.png'

export default function Book() {
    return (
        <div className="book-container">
            <header>
                <img src={bookImg} alt="book" />
                <span>Bem Vindo, <strong>Ser Humano</strong> </span>
                <Link className="button" to="book/new">ADD NEW BOOK</Link>
                <button type="button">
                <img src={shutdown} alt="book" />
                </button>
            </header>

        </div>
    )
}