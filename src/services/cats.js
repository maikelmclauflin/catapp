import fetch from 'utils/fetch'
import { xml2js } from 'xml-js'
import querystring from 'querystring'
import { CAT_KEY as api_key } from 'containers/App/constants'
const options = {
  compact: true
};
export { retrieve, vote }

function retrieve() {
  const format = 'xml'
  const results_per_page = 5
  const qs = querystring.stringify({
    format,
    results_per_page
  })
  const url = `https://thecatapi.com/api/images/get?${qs}`
  return fetch(url, {
    credentials: 'omit'
  }).then(xml => {
    const json = xml2js(xml, options)
    const { response } = json
    const { data } = response
    const { images } = data
    const { image } = images
    return image.map(image => ({
      src: image.url._text,
      id: image.id._text
    }))
  })
}

function vote(sub_id, image_id, score) {
  const qs = querystring.stringify({
    api_key,
    sub_id,
    image_id,
    score
  });
  const url = `http://thecatapi.com/api/images/vote?${qs}`;
  return fetch(url, {
    credentials: 'omit',
    mode: 'no-cors'
  }).then(res => {
    console.log(res)
    return res
  }, (err) => {
    return null
  })
}