import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faSpinner,
} from '@fortawesome/fontawesome-free-solid';
class Loader extends React.Component {
  render() {
    return (<div {...this.props}>
      <FontAwesomeIcon spin icon={faSpinner} />
    </div>)
  }
}
const StyledLoader = styled(Loader)``
export default StyledLoader