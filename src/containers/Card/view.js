import React from 'react';
import styled from 'styled-components'
class CardView extends React.Component {
  render() {
    const { props } = this
    const { src, className, style } = props
    const backgroundImage = `url(${src})`
    return (
      <div className={className} style={{
        ...style,
        backgroundImage,
      }}></div>
    );
  }
}
const StyledCards = styled(CardView)`
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
background-position: center;
background-size: contain;
background-repeat: no-repeat;
`
export default StyledCards