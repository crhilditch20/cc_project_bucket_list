import React from 'react';
import { Link } from 'react-router';

class IndividualItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      thisItem: this.props.item.id
    }
  }

  render () {
  var info = <div>Some info</div>
    switch(this.props.category){
      case "country":
        info = <div>
          <h4>Where I'm going: {this.props.item.name}</h4>
          <p>Region: {this.props.item.region}</p>
          <p>Best season to visit: {this.props.item.season}</p>
          <p>How long for: {this.props.item.visitLength} weeks</p>

        </div>
      break;
      case "experience":
       info = <div>
        <h4>What I want to do: {this.props.item.title}</h4>
        <p>What's that? {this.props.item.description}</p>
        <p>Best season to try this: {this.props.item.season}</p>
        
       </div>
      break;
      case "event":
        info = <div>
          <h4>Event I want to go to: {this.props.item.title}</h4>
          <p>What's that? {this.props.item.description}</p>
          <p>Where's it happening: {this.props.item.venue}</p>
          <p>When's it happening: {this.props.item.date}</p>
            

        </div>
      break;
    }

    return (
      <div className='item-page'>
      <div className='info-div'>
        {info}
         
      </div>
      <img id='itempage-pic' src={this.props.item.imageURL}></img>

      
      </div>
      );
  }

}

export default IndividualItem;