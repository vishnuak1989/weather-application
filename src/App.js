import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import API_K from "./keys_config.js";

const API_KEY = API_K
class App extends React.Component {
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    let data="";
    if(city && country){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
      try {
        data = await api_call.json();
      } catch (e) {
        this.setState({error:"Failed to fetch weather"})
        alert("failed to fetch weather");
      }
      
      if(data.main)
      {
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error: ""
            });
          }
          else {
            this.setState({
              temperature:undefined,
              city:undefined,
              country:undefined,
              humidity:undefined,
              description:undefined,
              error: data.message
            });
          }
        }
    else{
      this.setState({
        error:"Please enter City and Country"
      })
    }


          }
          reset = (e)=>(e.target.reset());
          closeAlert=(e)=>(
            this.setState({
              temperature:undefined,
              city:undefined,
              country:undefined,
              humidity:undefined,
              description:undefined,
              error: ""
            })
          );
          
  render(){
    return(
      <div className="app">
      <Titles />
      <Form getWeather={this.getWeather} reset={this.reset} />
      <Weather closeAlert={this.closeAlert}
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      />
      </div>
    );
  }
};
export default App;
