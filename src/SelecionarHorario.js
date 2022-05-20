import {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

const Container = styled.div`
p {
    text-align: center;
    padding: 45px 0;
    color: #293845;
    font-size: 24px;
}
`
const Sessao = styled.div `
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    padding-left: 15px;
button {
    width: 60px;
    height: 30px;
} 
` 

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
            <Container>
                <p>Selecione o horário</p>
            </Container>
                {horario.map((dia, index) => <Sessao key={index} > {dia.weekday} - {dia.date}  <Link to={`/assentos/${dia.id}`}><div className="sessoes-horarios">{dia.showtimes.map((showtimes , index) => <button key={index}> {showtimes.name}</button>)}</div></Link>
                 </Sessao>) }
            <footer>               
            </footer>
        </>
    )
}
