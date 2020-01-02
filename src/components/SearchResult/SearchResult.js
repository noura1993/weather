import React from 'react';
import './SearchResult.css';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.renderSearchResult = this.renderSearchResult.bind(this);
    }
   
    renderSearchResult() {
        if( this.props.searchResult === undefined || Object.entries(this.props.searchResult).length === 0) {
            return; 
        } 

        return (
            <div className='searchResult'>
            <p className='bold'>{ this.props.searchResult.city}</p>
            <p className='big'>
                <img src={this.props.searchResult.icon} alt='blank'></img>
                { this.props.searchResult.temperature}°C
                </p>
            <p>{ this.props.searchResult.tempMax}°C/{ this.props.searchResult.tempMin}°C &nbsp;&nbsp; <strong>Feels like</strong> &nbsp;{ this.props.searchResult.feelsLike}°C</p> 
            <p>{ this.props.searchResult.description}</p>
            {/* <p><strong>humidity:</strong> { this.props.searchResult.humidity}</p>    */}
            
        </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderSearchResult()}
            </div>
            
        )
    }
}

export default SearchResult;