import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Searchbox } from './components/searchbox'
import { Maincardcomponent } from './components/card'
//import { Weatherupdates } from './components/5dayweather'

 export function App() {
 const [city, setCity]=useState("Delhi")
const [weather,setWeather]=useState()

useEffect (()=>{ 
  const fetchweather= async()=>{
  try{
const response =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=344e3159d9255117008a6ece2e8c6980&units=metric`)
    setWeather(response.data)
  }
catch(error){
console.error("error while fetching the data",error )
}}
fetchweather()
},[city])
  return  <div className='"w-full h-screen  flex-col items-center relative bg-gradient-to-b from-[#355f86] via-[#5b93c5] to-[#0074b7] rounded-sm mb-8 text-white font-sans'>
<Searchbox city={setCity} />

{
  weather&&( <div>
    <div className=' flex justify-center items-center pr-30 pt-20 pb-10 '>
      <div className=' items-baseline space-x-4 font-bold text-2xl'>
    {`${weather.main.temp} \u00B0C`}
    <h2>{weather.name} </h2>
    </div>
            <div className='flex items-baseline space-x-4 pl-20 font-semibold'>
            <img  src={'http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'}
          width={10} height={10}/>
          {weather.weather[0].description}
          </div>
    </div>
   
    <div className=' text-md font-semibold  flex  flex-col items-center justify-center  '> 
          <Maincardcomponent title={<div>
           <p>feels like: {`${weather.main.feels_like} \u00B0C`}</p> 
           <p>cloudiness: {weather.clouds.all}%</p>
         <p>wind speed: {weather.wind.speed} m/s</p>
         <p>pressure: {weather.main.pressure} mbar</p>
         <p>humidity: {weather.main.humidity} %</p>
         </div>}> 
          
          </Maincardcomponent>
          </div>
   </div>)
}
</div>  
      
}

export default App
