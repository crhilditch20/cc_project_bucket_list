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
        info = <div>Display country info</div>
      break;
      case "experience":
       info = <div>Display experience info</div>
      break;
      case "event":
        info = <div>Display event info</div>
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