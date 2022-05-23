import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
    p {
        text-align: center;
        padding: 45px 0;
        color: #293845;
        font-size: 24px;
        color: #247A6B;

    }
`
const RenderizarSucesso = styled.div` 
    padding-left: 30px;
    p {
        font-weight: bold;    
        font-size: 24px;
        display: flex;
        align-items: center;
        color: #293845;
        padding-top: 30px;
        padding-bottom: 10px;
        letter-spacing: 0.04em;
    }

    span {
        font-size: 22px;
        display: flex;
        align-items: center;
        color: #293845;
        padding-bottom: 5px;
    }

   
`
const Button = styled.div`
    display: flex;
    justify-content: center;
 button {
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    margin-top: 80px;
  }
`

export default function Sucesso ({pedido}) {
    return (
        <>
            <Container className="bold">
                <p>Pedido feito com sucesso! </p>
            </Container>
            <RenderizarSucesso>
                <p>Filme e sessão</p>
                    <span>{pedido.filme}</span>
                    <span>{pedido.data}</span>
                    <span>{pedido.horario}</span>
                <p>Ingressos</p>
                    <span>{pedido.assentos.map(assento => <span className="centralizado flexD">Assento {assento}</span>)}</span>
                <p>Comprador</p>
                    <span>Nome: {pedido.nome}</span>
                    <span>CPF: {pedido.cpf}</span>
                
            </RenderizarSucesso>
            <Button><Link to="/"><button>Voltar para Home</button></Link></Button>
        </>
    )
}