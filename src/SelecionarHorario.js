import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function SelecionarHorario () {
    const {idFilme} = useParams()
    const [horario, setHorario] = useState({})
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        request.then((response) => {
            setHorario(response.data)
        })
    })

    return ( 
        <>
            <div className="container">
                <p>Selecione o horário</p>
            </div>
            <div>{horario.weekday}</div>
            <div>{horario.date}</div>
            <footer>
                
            </footer>
        </>
  
    )
}