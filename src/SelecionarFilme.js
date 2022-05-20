import axios from "axios"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
p {
    text-align: center;
    padding: 45px 0;
    color: #293845;
    font-size: 24px;
}
`
const Movie = styled.div `
display: flex;
flex-wrap: wrap;   
justify-content: center; 

.image {
    width: 130px;
    height: 190px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 11px 20px;
}

img {
    padding: 8px;
    width: 129px;
    height: 193px;
}
`

export default function SelecionarFilme () {
    const [movies, setMovies] = useState([])
    useEffect(() => {  const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/`)
    request.then(response => {setMovies(response.data)}).catch("carregando")
   }, [])
    return (
        <>
            <Container>
                <p>Selecione o Filme</p>
                <Movie> 
                    {movies.map( (movies, index) => <Link to={`/sessoes/${movies.id}`}><div key={index} className="image" >
                        <img src={movies.posterURL} alt="filmes"  /></div></Link> 
                    )}
                </Movie>
            </Container>
        </>
    )
}
