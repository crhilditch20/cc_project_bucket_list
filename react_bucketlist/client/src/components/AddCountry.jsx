import React from 'react';
import { Link } from 'react-router';

class AddCountry extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      name: "",
      region: "",
      season: "",
      visitLength: null,
      imageURL: "",
      mapURL: "",
      success: false
    }
  }

  addToDatabase (event) {
    const url = "http://localhost:5000/countries"
    event.preventDefault();
    const request = new XMLHttpRequest();
      request.open('POST', url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.withCredentials = true;
      request.onload = () => {
        if (request.status === 200){
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
      console.log(data);
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
    var addCountryDiv = 
      <div>
        <h4>Add a new country to my bucket list</h4>
        <form onSubmit={this.addToDatabase} className='bucketlist-form'>
          <input type="text" onChange={this.handleOnChangeName.bind(this)}  placeholder="Country name" />
          <input type="text" onChange={this.handleOnChangeRegion.bind(this)}  placeholder="Region" />
          <input type="text" onChange={this.handleOnChangeSeason.bind(this)}  placeholder="Best season to visit" />
          <input type="text" onChange={this.handleOnChangeVisitLength.bind(this)}  placeholder="Number of weeks to stay" />
          <input type="text" onChange={this.handleOnChangeImageURL.bind(this)}  placeholder="Image URL" />
          <input type="text" onChange={this.handleOnChangeMapURL.bind(this)}  placeholder="Map URL" />

          <button onClick={this.addToDatabase.bind(this)}>Add to my Bucket List </button>
        </form>
      </div>

      if(this.state.success){
        addCountryDiv = <div>
          <h4> {this.state.name} added to your bucket list!</h4>
          <Link className='bucket-list-link' to='/bucketlists'>Return to Bucket List</Link>
        </div>
      }

      return (
        <div>
          { addCountryDiv }
        </div>
        );
  }
}

export default AddCountry;