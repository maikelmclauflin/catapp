import React from 'react';
import styled from 'styled-components'
import Input from 'components/Input'
import querystring from 'querystring'
// import logo from 'images/svg/logo.svg';
import Cards from 'containers/Cards'
import { CAT_KEY } from './constants'
class App extends React.Component {
  render() {
    const { props } = this
    const { className, id } = props
    const api_key = CAT_KEY
    const sub_id = id
    const qs = querystring.stringify({ api_key, sub_id })
    const href = `http://thecatapi.com/api/images/getvotes?${qs}`
    return (
      <div className={className}>
        <div className="container">
          <h2 className="App-header">Rate that Cat!</h2>
          <Cards />
          <label htmlFor="userkey">User key</label>
          <Input id="userkey" value={id} disabled={true} />
          <label htmlFor="apikey">API key</label>
          <Input id="apikey" value={CAT_KEY} disabled={true} />
          <a href={href} target="_blank">see your votes</a>
        </div>
      </div>
    );
  }
}
const StyledApp = styled(App)`
text-align: center;
overflow: hidden;
padding-bottom: 30px;
.container {
  margin: 0 auto;
  max-width: 375px;
}
.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  margin: 0;
  padding: 20px;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
}

label {
  text-align: left;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

`
export default StyledApp