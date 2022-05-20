import styled from "styled-components"

const Container = styled.div`
p {
    text-align: center;
    padding: 45px 0;
    color: #293845;
    font-size: 24px;
}
`
export default function Sucesso () {
    return (
        <>
            <Container className="bold">
                <p>Pedido feito com sucesso! </p>
            </Container>
        </>
    )
}