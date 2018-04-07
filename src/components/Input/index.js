import React from 'react'
import styled from 'styled-components'
const Input = (props) => <input type="text" {...props} />
const StyledInput = styled(Input)`
display: block;
border: 1px solid;
border-radius: 1px;
width: 100%;
font-size: 16px;
line-height: 24px;
border-radius: 5px;
padding: 0 10px;
`
export default StyledInput