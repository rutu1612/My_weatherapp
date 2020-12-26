const search = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data)=>{

    const name = data.name;
    const weather = data.weather;

    details.innerHTML = `
    <h5 class="my-3">${name.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    `

    //update day night img

    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconsrc)
    
    let timesrc = null;
    if(weather.IsDayTime){
        timesrc= 'img/3.jpg';
    }
    else{
        timesrc= 'img/9.jpg';
    }
    time.setAttribute('src',timesrc)

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    
}

const updatecity = async(city)=>{
     const name = await getcity(city);
     const weather = await getweather(name.Key);

     return{name,weather}
}

search.addEventListener('submit',e=>{
    e.preventDefault();
    
    const cityname = search.city.value.trim();
    search.reset();

    updatecity(cityname).then(data=>{
        updateUI(data);
    }).catch(err=>{
        console.log(err);
    });
})