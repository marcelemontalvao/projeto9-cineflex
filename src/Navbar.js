import styled from "styled-components"

const Header = styled.div `
background: #C3CFD9;
p {
    text-align: center;
    padding: 15px 0;
    color: #E8833A;
    font-size: 34px;
}

`

export default function Navbar () {
    return (
        <Header>
            <p>CINEFLEX</p>
        </Header>
    )
}