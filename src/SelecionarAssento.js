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
export default function SelecionarAssento () {
    const {idSessao} = useParams()
    const [horario, setHorario] = useState([])
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        request.then((response) => {setHorario(response.data.days)
        }).catch("carregando") }, []
    )

    return (
        <>
            <Container>
                <p>Selecione o(s) assento(s)</p>
            </Container>
        </>
    )
}

