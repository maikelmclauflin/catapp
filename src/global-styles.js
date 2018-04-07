/* body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
} */
import { injectGlobal } from 'styled-components';
injectGlobal`
html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
`