let currCity = "texcoco";
let latitud;
let longitud;
const weatherFiveDays = document.querySelector('.weatherFiveDays-container');
const image = document.querySelector('.currentTime__image img');
const grados = document.querySelector('.degree');
const descripcion = document.querySelector('.currentTime__description');
const currentTimeDay = document.querySelector('.currentTime__day');
const ciudad = document.querySelector('.city');
const kelvin = 273.15;

const wind__value = document.querySelector('.wind__value');
const wind__icon = document.querySelector('.wind__icon i');
const wind__orienName = document.querySelector('.wind__orienName');
const humidity__value = document.querySelector('.humidity__value');
const visibility__value = document.querySelector('.visibility__value');
const pressure__value = document.querySelector('.pressure__value');
const barraProgresoContent = document.querySelector('.barraProgresoContent');

let search = document.querySelector('.search');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];

let nextDay = [];
let nextTwoDays = [];
let nextThreeDays = [];
let nextFourDays = [];
let nextFiveDays = [];

// CONVERTIR CODIGO DEL PAIS EN SU NOMBRE
function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], {
    type: "region"
  });
  return regionNames.of(country);
}

const searchForm = document.querySelector(".searchForm")
console.log(searchForm);
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  currCity = search.value;
  console.log(currCity);
  getWeather();
  search.value = ""
});

function getWeather() {

  const APIKEY = '55c10f38f72f36982c617bd3cc4cc320';
  const APIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${currCity}&appid=${APIKEY}&units=metric`;

  fetch(APIURL)
    .then(response => response.json())
    .then(data => {
      showData(data);
      fiveDays(data);
      return console.log(data);
    }).catch(error => console.log(error));

  const showData = (data) => {
    const date = new Date(data.list[0].dt_txt);
    image.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`;
    grados.innerText = data.list[0].main.temp.toFixed(0);
    descripcion.innerText = data.list[0].weather[0].description;
    currentTimeDay.innerText = `${days[date.getDay()].slice(0, 3)}, ${date.getDate()} ${months[date.getMonth()].slice(0, 3)}`;
    ciudad.innerText = `${data.city.name} - ${convertCountryCode(data.city.country)}`;
    wind__value.innerText = (data.list[0].wind.speed * 2.237).toFixed(0);
    let iconGrade = data.list[0].wind.deg - 45;
    console.log(iconGrade);
    console.log(data.list[0].wind.deg);
    wind__icon.style.transform = `rotate(${iconGrade}deg)`;

    wind__orienName.innerText = degree(data.list[0].wind.deg);
    humidity__value.innerText = data.list[0].main.humidity;
    barraProgresoContent.style.width = `${data.list[0].main.humidity}%`;
    visibility__value.innerText = new Intl.NumberFormat('es-MX').format(data.list[0].visibility);
    console.log(new Intl.NumberFormat('es-MX').format(data.list[0].visibility));
    pressure__value.innerText = data.list[0].main.pressure;
  }
}

window.addEventListener('DOMContentLoaded', getWeather());







// console.log(typeof parseInt(new Intl.NumberFormat('es-MX').format(data.list[0].visibility)));
    // console.log(parseInt(new Intl.NumberFormat('es-MX').format(data.list[0].visibility)));
    // console.log(typeof parseInt(new Intl.NumberFormat('es-MX').format(10000)));
    // console.log(parseInt(new Intl.NumberFormat('es-MX').format(10000)));

    // if(parseInt(new Intl.NumberFormat('es-MX').format(data.list[0].visibility)) > parseInt(new Intl.NumberFormat('es-MX').format(10000))){
    //   visibility__value.innerText = new Intl.NumberFormat('es-MX').format(data.list[0].visibility).slice(0, 2);
    // }else{
    //   visibility__value.innerText = new Intl.NumberFormat('es-MX').format(data.list[0].visibility).slice(0, 3);
    // }



