import axios from "axios"
import {useState, useEffect} from "react"
 
export default function SelecionarFilme () {
    const [image, setImage] = useState([])
    
    useEffect(() => {  const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
    
    request.then(response => {setImage(response.data) }
  ).catch("carregando")
   }, [])
    return (
        <>
            <header>
                <p>CINEFLEX</p>
            </header>
            <div className="container">
                <p>Selecione o Filme</p>
                {image.map( (images, index) =>  <div key={index} className="image">
                    <img src={images.posterURL} alt="filmes"  /> 
                </div> )}
               
            </div>
        </>
    )
}
