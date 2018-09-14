import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = 'process.env';

class App extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please enter the values'
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Form getWeather={this.getWeather} />
        <Weather data={this.state} />
      </div>
    );
  }
}

export default App;
