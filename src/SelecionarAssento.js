import {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
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
    width: 350px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
    display: flex;
    height: 117px;
    align-items: center;
    position: absolute;
    bottom: 0%;
    width: 100%;
`
const ImageDiv = styled.div`
    justify-content: center;
    background-color: #fff;
    width: 64px;
    height: 89px;
    margin: 0 14px;

img {
    width: 49px;
    height: 72px;
    left: 0;
  }
`;

const Descricao = styled.div`
    display: flex;
    flex-direction: column;
`
const Legenda = styled.div`
  justify-content: space-evenly;
  margin-right: 50px;
  padding-top: 50px;

  div {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    font-size: 11px;
    font-family: "Roboto";
  }
  .selecionado {
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
  }

  .disponivel {
 
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;

  }
  .ocupado {
   
    background-color: #FBE192;
    border: 1px solid #F7C52B;
  }
  p {
    font-size: 13px;
    font-family: "Roboto";
    padding-top: 5px;
  }
`;

const Formulario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;

  div {
    margin-bottom: 20px 0;
    display: flex;
  }
  label {
    font-family: "Roboto";
    font-size: 18px;
    color: #293845;
    padding: 10px;
    display: inline;
    margin-top: 10px;
  }
  input {
    width: 290px;
    height: 51px;
    border-radius: 3px;
    border: 1px solid #D5D5D5;
    font-size: 18px;
    font-family: "Roboto";
    padding: 0 20px;
  }
  button {
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    margin-top: 30px;
  }
`;

export default function SelecionarAssento ({pedido, setPedido}) {
    const navigate = useNavigate()
    const {idSessao} = useParams()
    const [sessao, setSessao] = useState(null)
    const [imageFooter, setImageFooter] = useState([])
    const [titleMovie, setTitleMovie] = useState([])
    const [movieDay, setMovieDay] = useState([])   
    const [movieTime, setMovieTime] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    function fazerPedido() {
        if(selectedSeats.length < 1) {
            alert("Selecione pelo menos um assento")
        } else {
            let selectedSeatsIds = []
            let selectedSeatsNumbers = []
            selectedSeats.forEach((seat) => {
                selectedSeatsIds.push(seat.id)
                selectedSeatsNumbers.push(seat.number)
            })
            const objApi = {
                ids: selectedSeatsIds,
                name: name,
                cpf: cpf
            }
            setPedido({...pedido, nome: name, cpf: cpf, assentos: selectedSeatsNumbers})
           const request = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, objApi)
           request.then(
            navigate("/sucesso")
           )
        }
    }
    
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        request.then((response) => {setSessao(response.data.seats) 
            setImageFooter(response.data.movie.posterURL)
            setTitleMovie(response.data.movie.title)
            setMovieDay(response.data.day.weekday)
            setMovieTime(response.data.name)
            setPedido({filme: response.data.movie.title, data: response.data.day.date, horario: response.data.name})
        }).catch("carregando") }, [idSessao]
    )

    return (
        <>
            <Container>
                <p>Selecione o(s) assento(s)</p>
            </Container>
            {sessao && <SeatsContainer>{sessao.map((assento, index) => <Seats  index={index} isAvailable={assento.isAvailable} seatName={assento.name} seatId={assento.id} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />)}</SeatsContainer>}
            <Legenda className="centralizado">
                <div className="centralizado flexD">
                 <div className="selecionado"></div>
                    <p>Selecionado</p>
                </div>
                <div className="centralizado flexD">
                    <div className="disponivel"></div>
                    <p>Disponível</p>
                </div>
                <div className="centralizado flexD">
                    <div className="ocupado"></div>
                    <p>Indisponível</p>
                </div> 
            </Legenda>
            <Formulario> 
                <Input>
                    <p>Nome do comprador:</p> 
                    <input placeholder="Digite seu nome..." onChange={(event) => setName(event.target.value)}></input>
                </Input>
                <Input>
                    <p>CPF do comprador:</p> 
                    <input placeholder="Digite seu CPF..." onChange={(event) => setCpf(event.target.value) }></input>
                </Input>
                <button onClick={fazerPedido}>Reservar assento(s)</button>
            </Formulario>
           
            <Footer>
                <ImageDiv className="centralizado">
                    <img src={imageFooter} alt="movie"></img>
                </ImageDiv>
                <Descricao>
                    <p>{titleMovie}</p> 
                    <span>{movieDay} - {movieTime}</span>
                </Descricao>
            </Footer>
        </>
    )
}

