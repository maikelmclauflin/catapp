import React from 'react'
import styled from 'styled-components'
class Button extends React.Component {
  render() {
    const { props } = this;
    const { color } = props;
    return (<button {...props} style={{color}} />)
  }
}
const StyledButton = styled(Button)`
border: none;
outline: none;
background: white;
height: 50px;
width: 50px;
padding: 0;
border: 2px solid;
border-radius: 50%;
margin: 5px;
font-size: 24px;
`
export default StyledButton