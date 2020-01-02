import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }

        this.search = this.search.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.location)
        document.getElementById('search').value = "";
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value});
    }

    render() {
        return (
            <div className="SearchBar">
            <input placeholder="Enter a location" id='search' onChange={this.handleLocationChange}/>
            <button className="SearchButton"  onClick={this.search}>Get Weather</button>
          </div>  
        )
    }
}

export default SearchBar;