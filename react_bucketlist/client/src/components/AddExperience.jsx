import React from 'react';
import { Link } from 'react-router';

class AddExperience extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      season: "",
      imageURL: "",
      success: false
    }
  }

  addToDatabase (event) {
    console.log("event starting")
    const url = "http://localhost:5000/experiences"
    event.preventDefault();
    const request = new XMLHttpRequest();
      request.open('POST', url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.withCredentials = true;
      request.onload = () => {
        if (request.status === 200){
          console.log("Added to database");
          this.setState({success: true});
        }
      }
      const data = {
          experience: {
          title: this.state.title,
          description: this.state.description,
          season: this.state.season,
          imageURL: this.state.imageURL
        }
      }
      request.send(JSON.stringify(data));
    }

  handleOnChangeTitle(event) {
      this.setState({title: event.target.value})
    }

  handleOnChangeDescription(event) {
    this.setState({description: event.target.value})
  }

  handleOnChangeSeason(event) {
    this.setState({season: event.target.value})
  }

  handleOnChangeImageURL(event) {
    this.setState({imageURL: event.target.value})
  }

  render () {
    var addExperienceDiv = 
      <div>
        <h4>Add a new experience to my bucket list</h4>
        <form onSubmit={this.addToDatabase} className='bucketlist-form'>
          <input type="text" onChange={this.handleOnChangeTitle.bind(this)}  placeholder="Title" />
          <input type="text" onChange={this.handleOnChangeDescription.bind(this)}  placeholder="Description" />
          <input type="text" onChange={this.handleOnChangeSeason.bind(this)}  placeholder="Best season to try this out" />
          <input type="text" onChange={this.handleOnChangeImageURL.bind(this)}  placeholder="Image URL" />

          <button onClick={this.addToDatabase.bind(this)}>Add to my Bucket List </button>
        </form>
      </div>

      if(this.state.success){
        addExperienceDiv = <div>
          <h4> {this.state.title} added to your bucket list!</h4>
          <Link className='bucket-list-link' to='/bucketlists'>Return to Bucket List</Link>
        </div>
      }

      return (
        <div>
          { addExperienceDiv }
        </div>
        );
  }
}

export default AddExperience;