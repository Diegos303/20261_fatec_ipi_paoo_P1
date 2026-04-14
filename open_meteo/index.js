
const axios = require('axios')

const baseURL = 'https://geocoding-api.open-meteo.com/v1/search'
const baseURL2 = 'https://api.open-meteo.com/v1/forecast'

const nomeCidade = 'São Paulo'
const count = 1
const language = 'pt'
const format = 'json'

const url = `${baseURL}?name=${nomeCidade}&count=${count}&language=${language}&format=${format}`

function consultaCoordenadas(url) {
    return axios
        .get(url)
        .then((res) => {
            return res.data
        })
        .then((res) => {
            const primeiro = res.results[0]
            console.log('Primeiro resultado:', primeiro)
            return primeiro;
        })
        .then((res) => {
            const latitude = res.latitude
            const longitude = res.longitude

            console.log(`Cidade: ${res.name}`)
            console.log(`Latitude: ${latitude}`)
            console.log(`Longitude: ${longitude}`)

            return {latitude, longitude}
        })
        .catch((erro) => {
            console.log(`Erro: ${erro}`)
        });
}

const consultaCondições = async(latitude, longitude) => {
    try {
        const urlClima = `${baseURL2}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,wind_speed_10m`
        const res = await axios.get(urlClima)

        const dados = res.data.current


        console.log('\nCondições Atuais');
        console.log(`Temperatura: ${dados.temperature_2m} °C`)
        console.log(`Sensação térmica: ${dados.apparent_temperature} °C`)
        console.log(`Velocidade do vento: ${dados.wind_speed_10m} km/h`)



    }
    catch (erro) {
        console.log(`Erro: ${erro}`)

    }

}

consultaCoordenadas(url)
.then(coordenadas => consultaCondições(coordenadas.latitude, coordenadas.longitude))
        




