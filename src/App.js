import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SelecionarHorario from "./SelecionarHorario";
import SelecionarAssento from "./SelecionarAssento"
import SelecionarFilme from "./SelecionarFilme"
import Sucesso from "./Sucesso";
import '../src/assets/css/reset.css'
import '../src/assets/css/styles.css'
import { useState } from "react";

export default function App () {
    const [pedido, setPedido] = useState({})

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<SelecionarFilme />} />
                <Route path='/sessoes/:idFilme' element={<SelecionarHorario />} />
                <Route path='/assentos/:idSessao' element={<SelecionarAssento pedido={pedido} setPedido={setPedido} />} />
                <Route path='/sucesso' element={<Sucesso pedido={pedido} />} />
            </Routes>
        </BrowserRouter>
    )
}