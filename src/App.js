import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelecionarHorario from "./SelecionarHorario";
import SelecionarAssento from "./SelecionarAssento"
import SelecionarFilme from "./SelecionarFilme"
import Sucesso from "./Sucesso";
import '../src/assets/css/reset.css'
import '../src/assets/css/styles.css'

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SelecionarFilme />} />
                <Route path='/filme' element={<SelecionarHorario />} />
                <Route path='/sessao' element={<SelecionarAssento />} />
                <Route path='/sucesso' element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
    )
}