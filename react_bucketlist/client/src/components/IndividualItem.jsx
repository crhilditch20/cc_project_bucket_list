import React from 'react';
import { Link } from 'react-router';

class IndividualItem extends React.Component {

  constructor (props) {
    super(props);
    
  }

  render () {
      
    return (
      <div>
      {this.props.item.name}
      {this.props.item.title}
      <img id='itempage-pic' src={this.props.item.imageURL}></img>
      
      </div>
      );
  }

}

export default IndividualItem;