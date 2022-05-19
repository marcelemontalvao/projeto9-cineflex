import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function SelecionarHorario () {
    const {idFilme} = useParams()
    const [horario, setHorario] = useState([])
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        request.then((response) => {setHorario(response.data.days)
        }).catch("carregando") }, []
   )

    return ( 
        <>
            <div className="container">
                <p>Selecione o horário</p>
            </div>
                {horario.map((dia, index) => <span key={index} > {dia.weekday} - {dia.date}  </span>) }
                
            <footer>               
            </footer>
        </>
  
    )
}
