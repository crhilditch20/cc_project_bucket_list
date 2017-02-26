import React from 'react'

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
          <button id="country" key={index} value={index}>{country.country.name}</button>
        </div>
        );
      }.bind(this));
      return (
      <div id="countries">
       
          {countries}
    
      </div>
      );
  }
}

export default Countries;