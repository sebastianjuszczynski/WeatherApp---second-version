const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "&appid=4135e4d5d7091f795d21a640604abdd9";
const API_UNITS = "&units=metric"