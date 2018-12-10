import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
`
export const Heading = styled.h1`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
`
export const SubHeading = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: normal;
`

export const Button = styled.button`
  padding: 5px 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 5px;
  margin: 0 10px;
  font-weight: 700;
  margin-bottom: 1.5em;
  &:focus {
    outline: none;
  }
  * {
    margin: 0 5px;
  }
`

export const SmallButton = styled(Button)`
  transition: background-color 0.33s;
  background-color: ${props => props.active ? 'green' : 'white'};
  color: ${props => props.active ? 'white' : 'black'};
  width: 10em;
`