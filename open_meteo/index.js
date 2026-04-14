
const axios = require('axios')

const baseURL = 'https://geocoding-api.open-meteo.com/v1/search'

const nomeCidade = 'São Paulo'
const count = 1;
const language = 'pt';
const format = 'json';

const url = `${baseURL}?name=${nomeCidade}&count=${count}&language=${language}&format=${format}`;


function consultaCoordenadas(url) {
    return axios
        .get(url)
        .then((res) => {
            return res.data;
        })
        .then((res) => {
            const primeiro = res.results[0];
            console.log('Primeiro resultado:', primeiro);
            return primeiro;
        })
        .then((res) => {
            const latitude = res.latitude;
            const longitude = res.longitude;

            console.log(`Cidade: ${res.name}`);
            console.log(`Latitude: ${latitude}`);
            console.log(`Longitude: ${longitude}`);

            return {latitude, longitude};
        })
        .catch((erro) => {
            console.log('Erro:', erro.message);
        });
}


consultaCoordenadas(url);
