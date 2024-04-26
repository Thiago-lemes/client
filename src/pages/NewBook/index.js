import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import newBook from '../../assets/notebook.png'

import './style.css'


export default function NewBook() {
    
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
                <form>
                    <input placeholder='Titulo'/>
                    <input placeholder='Autor'/>
                    <input  type='date' placeholder='Preço'/>
                    <input placeholder='Lançamento' />
                    <button className='button' type='submit'>ADD</button>
                </form>
            </div>
        </div>
    )
}