import React, { Component } from 'react';
import Selector from './components/selector'
import Table from './components/table'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      location: "Jakarta",
      weather: []
    }
  }

  componentDidMount(){
    const self = this
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.location}&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1`)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      self.setState({
        weather: data.list
      })
    });
  }

  changeLocation(location){
    this.setState({
      location: location,
      weather: [],
    })
    const self = this
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.location}&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1`)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      self.setState({
        weather: data.list
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img style={{width:'5%', borderRadius:'50'}} src="https://media.giphy.com/media/10d3NDzD40xb0s/giphy.gif" alt="logo" />
          <h2>Weather Info</h2>
        </div>
        <div className="App-intro">
        <p>Select The City</p>
        <Selector changeLocation={(location)=>this.changeLocation(location)} />
        <br />
        {this.state.weather.length === 0 ? <img style={{width:'5%', borderRadius:'50'}} src="https://s-media-cache-ak0.pinimg.com/originals/0c/44/da/0c44dacf1b038014a6f941131c5e8aa2.gif" alt="loading" /> : <Table data={this.state.weather} city={this.state.location}/> }
        </div>
      </div>
    );
  }
}

export default App;
