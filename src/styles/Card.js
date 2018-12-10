import styled from 'styled-components'

export const Deck = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75px;
  height: 100px;
  padding: 5px;
  color: ${props => props.red ? 'red' : props.black ? 'black' : null};
  margin: 10px;
  border-radius: 2px;
  box-shadow: 0px 0px 6px -2px rgba(0,0,0,0.75);
`

export const CardSuitTop = styled.span`
  width: 100%;
`
export const CardSuitBottom = styled.span`
  width: 100%;
  transform: rotateX(180deg);
  text-align: right;
`

export const CardNumber = styled.span`
  width: 100%;
  text-align: center;
`