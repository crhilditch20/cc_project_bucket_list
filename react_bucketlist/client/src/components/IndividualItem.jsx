import React from 'react';
import { Link } from 'react-router';
import EditCountry from './EditCountry';

class IndividualItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      thisItemID: this.props.item.id,

    }
  }

  render () {
  var info = <div className="info-div">Some info</div>
    switch(this.props.category){
      case "country":
        info = <div className="info-div">
          <h4>Where I'm going: {this.props.item.country.name}</h4>
          <p>Region: {this.props.item.country.region}</p>
          <p>Season I want to visit: {this.props.item.season}</p>
          <p>How long for: {this.props.item.visitLength} weeks</p>

        </div>
      break;
      case "experience":
       info = <div className="info-div">
        <h4>What I want to do: {this.props.item.title}</h4>
        <p>What's that? {this.props.item.description}</p>
        <p>Best season to try this: {this.props.item.season}</p>
        
       </div>
      break;
      case "event":
        info = <div className="info-div">
          <h4>Event I want to go to: {this.props.item.title}</h4>
          <p>What's that? {this.props.item.description}</p>
          <p>Where's it happening: {this.props.item.venue}</p>
          <p>When's it happening: {this.props.item.date}</p>
  
        </div>
      break;
    }

    return (
      <div className='item-page'>
      <div className='info-container'>
        {info}
         <input type='checkbox' id='done-it'></input>
         <button>Been there, done that!</button>
      </div>
      <img id='itempage-pic' src={this.props.item.imageURL}></img>
      <EditCountry item={this.props.item}/>
      
      </div>
      );
  }

}

export default IndividualItem;