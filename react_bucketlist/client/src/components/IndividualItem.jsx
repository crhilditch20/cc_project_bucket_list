import React from 'react';
import { Link } from 'react-router';
import EditCountry from './EditCountry';

class IndividualItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      thisItem: null,
      itemUpdated: false
    }
  }

  componentDidMount () {
    this.setState({thisItem: this.props.item});
  }

  componentWillReceiveProps () {
    this.setState({thisItem: this.props.item});
  }

  render () {
  var info = <div className="info-div">Some info</div>
    switch(this.props.category){
      case "country": 
        info = 
        <div className="info-div">
          <h4>Where I'm going: {this.state.thisItem.country.name}</h4>
          <p>Region: {this.state.thisItem.country.region}</p>
          <p>Season I want to visit: {this.state.thisItem.season}</p>
          <p>How long for: {this.state.thisItem.visitLength} weeks</p>
        </div>
     
      break;
      case "experience":
       info = <div className="info-div">
        <h4>What I want to do: {this.state.thisItem.title}</h4>
        <p>What's that? {this.state.thisItem.description}</p>
        <p>Best season to try this: {this.state.thisItem.season}</p>
        
       </div>
      break;
      case "event":
        info = <div className="info-div">
          <h4>Event I want to go to: {this.state.thisItem.title}</h4>
          <p>What's that? {this.state.thisItem.description}</p>
          <p>Where's it happening: {this.state.thisItem.venue}</p>
          <p>When's it happening: {this.state.thisItem.date}</p>
  
        </div>
      break;
    }

    if(this.props.category === "country"){
      var itemPageDiv = 
      <div className='item-page'>
      <div className='info-container'>
        {info}
         <input type='checkbox' id='done-it'></input>
         <button>Been there, done that!</button>
      </div>
      <img id='itempage-pic' src={this.props.item.country.imageURL}></img>
      <EditCountry item={this.props.item} reload={this.props.reload}/>
      </div>
    } else {
      itemPageDiv = 
      <div className='item-page'>
      <div className='info-container'>
        {info}
         <input type='checkbox' id='done-it'></input>
         <button>Been there, done that!</button>
      </div>
      <img id='itempage-pic' src={this.props.item.imageURL}></img>
      </div>
    }

      return (
        <div>
        {itemPageDiv}
       
        </div>
        );
      }
  }

// <button onClick={this.props.pageRefresh}>Return to bucket list</button>

export default IndividualItem;