import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Seats from "./Seats"

const Container = styled.div`
p {
    text-align: center;
    padding: 45px 0;
    color: #293845;
    font-size: 24px;
}
`
const SeatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px;
`

const Input = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 51px;
`
const Footer = styled.div`
background-color: #dfe6ed;
border: 1px solid #9eadba;
padding-top:70px;
`
const ImageDiv = styled.div`
justify-content: center;
background-color: #fff;
width: 64px;
height: 89px;
border-radius: 5px;
margin: 0 14px;

img {
    width: 49px;
    height: 72px;
    left: 0;
  }
`;


export default function SelecionarAssento () {
    const {idSessao} = useParams()
    const [sessao, setSessao] = useState(null)
    const [imageFooter, setImageFooter] = useState([])
    const [titleMovie, setTitleMovie] = useState([])
    const [movieDay, setMovieDay] = useState([])   
    const [movieTime, setMovieTime] = useState([])
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        request.then((response) => {setSessao(response.data) 
            setImageFooter(response.data.movie.posterURL)
            setTitleMovie(response.data.movie.title)
            setMovieDay(response.data.day.weekday)
            setMovieTime(response.data.name)
        }).catch("carregando") }, [idSessao]
    )

    return (
        <>
            <Container>
                <p>Selecione o(s) assento(s)</p>
            </Container>
            {sessao && <SeatsContainer>{sessao.seats.map((assento, index) => <Seats key={index} isAvailable={assento.isAvailable} seatName={assento.name} seatId={assento.id} />)}</SeatsContainer>}
            <span>Selecionado</span>
            <span>Disponível</span>
            <span>Indisponível</span>
            <Input><p>Nome do comprador:</p> <input placeholder="Digite seu nome..."></input></Input>
            <Input><p>CPF do comprador:</p> <input placeholder="Digite seu CPF..."></input></Input>
            <button>Reservar assento(s)</button>
            <Footer className="centralizado">
                <ImageDiv className="centralizado">
                    <img src={imageFooter} alt="movie"></img>
                </ImageDiv>
                    <p>{titleMovie}</p> 
                    <span>{movieDay}</span>
                    <span>{movieTime}</span> 
            </Footer>
        </>
    )
}

