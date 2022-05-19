import axios from "axios"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
 
export default function SelecionarFilme () {
    const [movies, setMovies] = useState([])
    useEffect(() => {  const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/`)
    request.then(response => {setMovies(response.data)}).catch("carregando")
   }, [])
    return (
        <>
            <div className="container">
                <p>Selecione o Filme</p>
                <div className="flex"> 
                    {movies.map( (movies, index) => <Link to={`/sessoes/${movies.id}`}><div key={index} className="image" >
                        <img src={movies.posterURL} alt="filmes"  /></div></Link> 
                    )}
                </div>
            </div>
        </>
    )
}
