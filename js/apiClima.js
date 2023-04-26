const weatherFiveDays = document.querySelector('.weatherFiveDays');

const showFiveDays = (data) => {

  for (const day of data.list) {
    weatherFiveDays.innerHTML += `
      
      <article class="weatherFiveDays__days">
        <p class="weatherFiveDays__title">${day.dt_txt}</p>
        <figure class="weatherFiveDays__image">
          <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="">
        </figure>
        <div class="temperatures">
          <p class="temperatures-max">${Math.floor(day.main.temp_max - kelvin)} °C</p>
          <p class="temperatures-min">${Math.floor(day.main.temp_min - kelvin)} °C</p>
        </div>
      </article>
      
      `;
  }

};

// window.addEventListener('load', () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position)
//       latitud = position.coords.latitude;
//       longitud = position.coords.longitude;

//       const APIKEY = '55c10f38f72f36982c617bd3cc4cc320';
//       // const APIURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&appid=${APIKEY}&units=metric`;
//       const APIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${currCity}&appid=${APIKEY}&units=metric`;

//       fetch(APIURL)
//         .then(response => response.json())
//         .then(data => {
//           showData(data);
//           showFiveDays(data);
//           return console.log(data)
//         })
//         .catch(error => console.log(error));

//       const date = new Date();

//       const showData = (data) => {
//         image.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
//         // grados.innerText = `${Math.floor(data.list[0].main.temp - kelvin)}`;
//         grados.innerText = data.list[0].main.temp;
//         descripcion.innerText = data.list[0].weather[0].description;
//         currentTimeDay.innerText = `${days[date.getDay() + 1].slice(0, 3)}, ${date.getDate()} ${months[date.getMonth() + 1].slice(0, 3)}`;
//         ciudad.innerText = `${data.city.name} - ${convertCountryCode(data.city.country)}`;
//       }
//     })
//   }

// })
