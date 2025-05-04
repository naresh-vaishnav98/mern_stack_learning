var form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    cityName = event.target.cityName.value;
    fetched = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=258e97b7a9ea94bff8f2c843d68d187c&units=metric`);
    final = await fetched.json();
    // console.log(final)
    if(final.cod == 404 || final.cod == 400){
        document.querySelector('#response').innerHTML = `<h1>City Not Found</h1>`;
    }
    document.querySelector('#response').innerHTML = `<h1>${final.name}</h1>
                                                    <h3>${final.sys.country}</h3>
                                                    <h1>${final.main.temp}</h1>
                                                    <img src="https://openweathermap.org/img/w/${final.weather[0].icon}.png" alt="">
                                                    <h3>${final.weather[0].description}</h3>`;
})