const axios = require('axios')

const cidade = 'São_Paulo'
const baseURL = `https://pt.wikipedia.org/api/rest_v1/page/summary/`
const url = `${baseURL}${cidade}`

axios.get(url,{headers:{'User-Agent':'inf'}})

.then((res) => {
  console.log('Título:', res.data.title)
  console.log('Resumo:', res.data.extract)
})
.catch((erro) => {
  console.log(`Erro: ${erro}`)
})
