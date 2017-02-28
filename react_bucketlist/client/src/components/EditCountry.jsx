import React from 'react';
import { Link } from 'react-router';

class EditCountry extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currentItem: this.props.item,
      name: this.props.item.country.name,
      region: this.props.item.country.region,
      season: "",
      visitLength: null,
      imageURL: this.props.item.country.imageURL,
      mapURL: this.props.item.country.mapURL
    }
  }

  editItem (event) {
    console.log("event starting")
    const url = "http://localhost:5000/countries/" + this.props.item.id
    event.preventDefault();
    const request = new XMLHttpRequest();
      request.open('PATCH', url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.withCredentials = true;
      request.onload = () => {
        if (request.status === 200){
          console.log("updated");
          this.setState({success: true});
        }
      }
      const data = {
          country: {
          name: this.state.name,
          region: this.state.region,
          season: this.state.season,
          visitLength: this.state.visitLength,
          imageURL: this.state.imageURL,
          mapURL: this.state.mapURL
        }
      }
      console.log("URL:", url)
      console.log("XMLHttpRequest:", request)
      request.send(JSON.stringify(data));
    }

  handleOnChangeName(event) {
      this.setState({name: event.target.value})
    }

  handleOnChangeRegion(event) {
    this.setState({region: event.target.value})
  }

  handleOnChangeSeason(event) {
    this.setState({season: event.target.value})
  }

  handleOnChangeVisitLength(event) {
    this.setState({visitLength: event.target.value})
  }

  handleOnChangeImageURL(event) {
    this.setState({imageURL: event.target.value})
  }

  handleOnChangeMapURL(event) {
    this.setState({mapURL: event.target.value})
  }

  render () {
    var editCountryDiv = 
      <div>
        <h4>Update details in bucket list</h4>
        <form onSubmit={this.editItem} className='bucketlist-form'>
          <input type="text" value={this.props.item.country.name} onChange={this.handleOnChangeName.bind(this)}  />
          <input type="text" value={this.props.item.country.region}onChange={this.handleOnChangeRegion.bind(this)} />
          <input type="text" defaultValue={this.props.item.season} onChange={this.handleOnChangeSeason.bind(this)}/>
          <input type="text" defaultValue={this.props.item.visitLength} onChange={this.handleOnChangeVisitLength.bind(this)}/>
          <input type="text" value={this.props.item.country.imageURL} onChange={this.handleOnChangeImageURL.bind(this)} />
          <input type="text" value={this.props.item.country.mapURL} onChange={this.handleOnChangeMapURL.bind(this)} />

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