import axios from "axios"
import React from "react"
import {useState, useEffect} from "react"
 
export default function SelecionarFilme () {
    //const [image, setImage] = useState({})
    
   // useEffect(() => {
    //axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies").then(response => {setImage(...response.data.posterURL) }
    //    ).catch("carregando")
   // }, [])
    return (
        <>
            <header>
                <p>CINEFLEX</p>
            </header>
            
            <p>Selecione o Filme</p>
            <div>
                <img></img>
            </div>
        </>
    )
}