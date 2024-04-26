import React from "react";
import { Link } from 'react-router-dom';
import './Books.css'
import bookImg from '../../assets/dictionary.png'
import shutdown from '../../assets/shutdown.png'
import remove from '../../assets/delete.png'
import edit from '../../assets/edit.png'
import NewBook from "../NewBook";

export default function Books() {
    return (
        <div className="book-container">
            <header>
                <img src={bookImg} alt="book" />
                <span>Bem Vindo, <strong>Ser Humano</strong> </span>
                <Link className="button" to="/new">ADD NEW BOOK</Link>
                <Link to="/">
                <img src={shutdown} alt="book" />
                </Link>
            </header>

            <h1> Rigistre um Livro</h1>
            <ul>
                <li>
                    <strong>Titulo</strong>
                    <p>Novo React</p>
                    <strong>Autor</strong>
                    <p>Lemes</p>
                    <strong>Preço</strong>
                    <p>R$477,00</p>
                    <strong>Lançamento</strong>
                    <p>18/01/01</p>

                    <button type="button">
                        <img src={edit} />
                    </button>
                    <button type="button">
                        <img src={remove} />
                    </button>
                </li>

                <li>
                    <strong>Titulo</strong>
                    <p>Novo React</p>
                    <strong>Autor</strong>
                    <p>Lemes</p>
                    <strong>Preço</strong>
                    <p>R$477,00</p>
                    <strong>Lançamento</strong>
                    <p>18/01/01</p>

                    <button type="button">
                        <img src={edit} />
                    </button>
                    <button type="button">
                        <img src={remove} />
                    </button>
                </li>

                <li>
                    <strong>Titulo</strong>
                    <p>Novo React</p>
                    <strong>Autor</strong>
                    <p>Lemes</p>
                    <strong>Preço</strong>
                    <p>R$477,00</p>
                    <strong>Lançamento</strong>
                    <p>18/01/01</p>

                    <button type="button">
                        <img src={edit} />
                    </button>
                    <button type="button">
                        <img src={remove} />
                    </button>
                </li>

                <li>
                    <strong>Titulo</strong>
                    <p>Novo React</p>
                    <strong>Autor</strong>
                    <p>Lemes</p>
                    <strong>Preço</strong>
                    <p>R$477,00</p>
                    <strong>Lançamento</strong>
                    <p>18/01/01</p>

                    <button type="button">
                        <img src={edit} />
                    </button>
                    <button type="button">
                        <img src={remove} />
                    </button>
                </li>

                <li>
                    <strong>Titulo</strong>
                    <p>Novo React</p>
                    <strong>Autor</strong>
                    <p>Lemes</p>
                    <strong>Preço</strong>
                    <p>R$477,00</p>
                    <strong>Lançamento</strong>
                    <p>18/01/01</p>

                    <button type="button">
                        <img src={edit} />
                    </button>
                    <button type="button">
                        <img src={remove} />
                    </button>
                </li>

                <li>
                    <strong>Titulo</strong>
                    <p>Novo React</p>
                    <strong>Autor</strong>
                    <p>Lemes</p>
                    <strong>Preço</strong>
                    <p>R$477,00</p>
                    <strong>Lançamento</strong>
                    <p>18/01/01</p>

                    <button type="button">
                        <img src={edit} />
                    </button>
                    <button type="button">
                        <img src={remove} />
                    </button>
                </li>
            </ul>
            
        </div>
    )
}