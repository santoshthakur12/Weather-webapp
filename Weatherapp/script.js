

const  inputElm = document.querySelector('#input');
const cityElm = document.querySelector('#city');



// const countryElm = document.querySelector('#country')


const WeatherElm =document.querySelector('#weather');



const Api_key =`a0cde74084be1ecd23aa0387ec83a4f0`;


// const api=`https://api.openweathermap.org/data/2.5/weather?q=${cityElm}&appid=${Api_key}&units=metric`;



const getWeather = async (cityElm)=>{

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityElm}&appid=${Api_key}&units=metric`;

   const response = await fetch(url);
   const data = await response.json();
   showData(data);
   console.log(data);
    
}



const showData = (data) =>{

    WeatherElm.innerHTML=`   
    
</div> 
            
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>

<div>
    <h2>${data.main.temp} &#176;C</h2>
    <h4>${data.weather[0].main}</h4>
</div>
`    
}

inputElm.addEventListener(
    "submit",
    function(event){
        getWeather(cityElm.value)
        event.preventDefault();
    }
)







