import React from 'react';
import { Link } from 'react-router';

class EditCountry extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currentItem: this.props.item,
      season: this.props.item.season,
      visitLength: this.props.item.visitLength
    }
  }

  editItem (event) {
    console.log("event starting")
    const url = "http://localhost:5000/bucketlistcountries/" + this.props.item.id
    console.log(url);
    event.preventDefault();
    const request = new XMLHttpRequest();
      request.open('PUT', url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.withCredentials = true;
      request.onload = () => {
        if (request.status === 200){
          console.log("updated");
          this.setState({success: true});
        }
      }
      const data = {
          season: this.state.season,
          visitLength: this.state.visitLength
        }
      
      console.log(data);
      request.send(JSON.stringify(data));
    }

  handleOnChangeSeason(event) {
    this.setState({season: event.target.value})
  }

  handleOnChangeVisitLength(event) {
    this.setState({visitLength: event.target.value})
  }

 
  render () {
    var editCountryDiv = 
      <div>
        <h4>Update details in bucket list</h4>
        <form onSubmit={this.editItem} className='bucketlist-form'>
     
          <input type="text" defaultValue={this.props.item.season} onChange={this.handleOnChangeSeason.bind(this)}/>
          <input type="text" defaultValue={this.props.item.visitLength} onChange={this.handleOnChangeVisitLength.bind(this)}/>
         

          <button onClick={this.editItem.bind(this)}>Update</button>
        </form>
      </div>

      return (
        <div>
          { editCountryDiv }
        </div>
        );
  }
}

export default EditCountry;