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
    padding-left: 24px; 

p {
    font-size: 20px;
}
` 
const Button = styled.button `
width: 83px;
height: 43px;
background-color: #E8833A;
border-radius: 3px;
margin-right: 8px;
font-size: 18px;
color: #FFFFFF;
border: none;
`
const Footer = styled.div`
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    width: 100%;
    height: 117px;
    display: fixed;
    bottom: 0;
    align-items: center;
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

export default function SelecionarHorario () {
    const {idFilme} = useParams()
    const [horario, setHorario] = useState([])
    const [imageFooter, setImageFooter] = useState([])
    const [titleMovie, setTitleMovie] = useState([])    
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        request.then((response) => {
            setHorario(response.data.days)
            setImageFooter(response.data.posterURL)
            setTitleMovie(response.data.title)
        }).catch("carregando") }, [idFilme]
   );

    return ( 
        <>
            <Container>
                <p>Selecione o horário</p>
            </Container>
                {horario.map((dia, index) => <Sessao key={index}> {dia.weekday} - {dia.date}  <div className="sessoes-horarios">{dia.showtimes.map((showtimes , index) => <Link to={`/assentos/${showtimes.id}`}><Button key={index}> {showtimes.name}</Button></Link>)}</div>
                 </Sessao>)}
        <Footer className="centralizado">    
            <ImageDiv className="centralizado">
                <img src={imageFooter} alt="movie"></img>
            </ImageDiv>
                <p>{titleMovie}</p>
        </Footer>
        </>
    )
}
