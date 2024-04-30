import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import Books from './pages/Books';
import NewBook from "./pages/NewBook";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="//Books" element={<Books />} />
                <Route path="/book/new:bookId" element={<NewBook />} />
            </Routes>
        </BrowserRouter>
    )
}
