const fiveDays = (data) => {

  const date = new Date(data.list[0].dt_txt);

  if (nextDay !== [] && nextTwoDays !== [] && nextThreeDays !== [] && nextFourDays !== [] && nextFiveDays !== []) {

    nextDay = [];
    nextTwoDays = [];
    nextThreeDays = [];
    nextFourDays = [];
    nextFiveDays = [];

    for (const day of data.list) {

      let dateDay = new Date(day.dt_txt);

      if (dateDay.getDate() == (date.getDate() + 1)) {
        nextDay.push(day);
      } else if (dateDay.getDate() == (date.getDate() + 2)) {
        nextTwoDays.push(day);
      } else if (dateDay.getDate() == (date.getDate() + 3)) {
        nextThreeDays.push(day);
      } else if (dateDay.getDate() == (date.getDate() + 4)) {
        nextFourDays.push(day);
      } else if (dateDay.getDate() == (date.getDate() + 5)) {
        nextFiveDays.push(day);
      }

    }
  }


  const showFiveDays = (datas) => {
    console.log(datas);

    let dia = new Date(datas[0].dt_txt);
    const weatherFiveDaysItem = document.createElement('article');
    weatherFiveDaysItem.className = "weatherFiveDays__days";

    weatherFiveDaysItem.innerHTML = `
      <p class="weatherFiveDays__title">${days[dia.getDay()].slice(0, 3)}, ${dia.getDate()} ${months[dia.getMonth()].slice(0, 3)}</p>
      <figure class="weatherFiveDays__image">
          <img src="https://openweathermap.org/img/wn/${datas[0].weather[0].icon}@2x.png" alt="">
      </figure>
      <div class="temperatures">
          <p class="temperatures-min">${datas[0].main.temp_min.toFixed(0)} °C</p>
          <p class="temperatures-max">${datas[0].main.temp_max.toFixed(0)} °C</p>
      </div>
    `;
    weatherFiveDays.appendChild(weatherFiveDaysItem);

  }

  if (weatherFiveDays.innerText !== '') {

    weatherFiveDays.innerText = '';

    showFiveDays(nextDay);
    showFiveDays(nextTwoDays);
    showFiveDays(nextThreeDays);
    showFiveDays(nextFourDays);
    showFiveDays(nextFiveDays);
  } else if (weatherFiveDays.innerText == '') {
    showFiveDays(nextDay);
    showFiveDays(nextTwoDays);
    showFiveDays(nextThreeDays);
    showFiveDays(nextFourDays);
    showFiveDays(nextFiveDays);
  }


}