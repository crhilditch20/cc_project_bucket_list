import React from 'react';
import { Link } from 'react-router';

class Countries extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedCountryID: null
    }
  }

  render () {
    var countries = this.props.countries.map(function(country, index){
      return (
        <div className="bucketlistItem">
        <img className="homepage-pic" src={country.country.imageURL}></img>
          <button className="goToItem" key={index} value={index}>{country.country.name}</button>
        </div>
        );
      }.bind(this));
      return (
      <div id="countries"> 
      <h4>Countries</h4>
      <Link className="add-new" to='/countries'>Add new</Link>
       
          {countries}
    
      </div>
      );
  }
}

export default Countries;