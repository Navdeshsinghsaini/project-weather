import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState } from "react"; 
import axios from "axios";

function Newlook () {
    
    const apikey = "432e67894a43b75fe68da616c1465a5f";
    const [data , setdata] = useState({})
    const [inputcity , setinputcity] = useState('');

   const getWeatherData = (cityName) => {
    if (!cityName) {

    }

    const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q= " + cityName + "&appid=" + apikey;

    axios.get(apiUrl).then((res)=>{
      console.log("response", res.data)
      setdata(res.data)
    }).catch((err) => {
       alert("Hi... Please enter valid Input")
    })
   }   
     const main = data.json;

     const handleChange = (e) =>{
          setinputcity(e.target.value)
     }

      const handleSearch = () => {
        getWeatherData(inputcity);
      }

     useEffect(()=>{
        getWeatherData('delhi');
     }, [])

     
 let a = 0;
    return(
     <div className="outer-div">
        <div className="working-div" >
            <div className="present-data-div">
              <div className="state-name">
                  <h2 className="current-name-1" > {data?.sys?.country} </h2>
                  <h1 className="current-name-2" > {data.name} </h1>
                  </div>
            <div className="current-data-div">
                <div className="current-temp">
                      <h1 className="temp-current">{((data?.main?.temp) - 273.15).toFixed(2)} °C</h1>
                </div>
            </div>
            
            </div>

            <div className="api-data-div">
                   <div className="sun-image">
                     <img className="sun" src="sun.png"/>
                   </div>
                   
                   <div className="type">
                        <h2 className="word-type"> Clouds : {data?.clouds?.all}% </h2>
                   </div>

                   <div className="search">
                      <input type="text" onChange={handleChange} className="input-field" placeholder="type any city" />
                      <button className="btn" onClick={handleSearch}  >🔍</button>
                  </div>

                  <div className="input-city">
                            <h4 className="input-name"> {data?.name} </h4>
                  </div>

                  <div className="input-temp">
                            <div  className="temp">  Temperature</div>
                            <div className="temp-input">{((data?.main?.temp) - 273.15).toFixed(2)} °C</div>
                  </div>
                     
                  <div className="input-humidity">
                            <div className="humidity">Humidity 💧</div>
                            <div className="humid-input">{data?.main?.humidity} %</div>
                  </div> 

                   <div className="input-visibilty">
                            <div className="visibilty">Visibilty</div>
                            <div className="visibility-input">{data?.visibility} ml</div>
                  </div>

                  <div className="input-wind">
                            <div className="wind">Wind</div>
                            <div className="wind-input">{data?.wind?.speed} Km/h</div>
                  </div>                     
            </div>
        </div>
        
     </div>
    )
}

export default Newlook;