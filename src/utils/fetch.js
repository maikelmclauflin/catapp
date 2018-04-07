// import isomorphicFetch from 'isomorphic-fetch'
export default _fetch
const parseJSON = parser('json')
const parseText = parser('text')

function _fetch(url, options = {}) {
  const { headers = {} } = options
  const { 'Content-Type': contentType } = headers
  return fetch(url, options)
    .then(checkStatus)
    .then(contentType === 'application/json' ? parseJSON : parseText);
}

function parser(method) {
  return (response) => {
    const { status } = response
    if (status === 204 || status === 205) {
      return null;
    }
    return response[method]();
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText);
}