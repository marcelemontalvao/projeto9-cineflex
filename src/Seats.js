import styled from "styled-components"

export default function Seats({isAvailable, seatName, seatId, isSelected}) {
    return (
        <Seat isAvailable={isAvailable}>{seatName}</Seat>
    )
}

const Seat = styled.div `
width: 26px;
height: 26px;
border-radius: 50%;
border: 1px solid ${props => props.isAvailable ? "#808F9D" : "#F7C52B"};
background: ${props => props.isAvailable ? "#C3CFD9" : "#FBE192"};
display: flex;
padding: 7px;
font-size: 11px;

`