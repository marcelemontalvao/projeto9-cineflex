import styled from "styled-components"
import {useState} from "react"

const Seat = styled.div `
    width: 26px;
    height: 26px;
    margin-left: 7px;
    border-radius: 50%;
    border: 1px solid ${props => props.isSelected ? "#1AAE9E" : props.isAvailable ? "#808F9D" : "#F7C52B"};
    background: ${props => props.isSelected ? "#8DD7CF": props.isAvailable ? "#C3CFD9" : "#FBE192"};
    display: flex;
    padding: 7.5px;
    cursor: pointer;
    font-size: 11px;
`

export default function Seats({isAvailable, seatName, seatId, selectedSeats , setSelectedSeats}) {
    const[isSelected, setIsSelected]= useState(false);
    function selected (seatId) {
        if (isAvailable) {
           setIsSelected(!isSelected)
           if(isSelected) {
            let array = selectedSeats.filter((seat) => seat != seatId)
            setSelectedSeats(array)
           } else {
            setSelectedSeats([...selectedSeats, {id: seatId, number: seatName}] )
           }
        } else {
            alert("Esse assento não está disponível")
        }
    }

    return (
        <>
           <Seat onClick={()=> selected(seatId)} isAvailable={isAvailable} isSelected={isSelected} >{seatName}</Seat>   
        </>
    )
}
