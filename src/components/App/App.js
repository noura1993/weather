import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import WeatherApi from '../../WeatherApi/WeatherApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {}
    }

    this.search = this.search.bind(this);
  }

  search(location) {
    WeatherApi.searchWeatherApi(location).then( weather => {
      this.setState({ searchResult: weather})
    })
  }

 render() {
  return (
    <div>
        <h1>w<span className="highlight">ea</span>ther</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-result">
            <SearchResult searchResult={this.state.searchResult}/>
          </div>
        </div>
      </div>
  )
 }
};

export default App;
