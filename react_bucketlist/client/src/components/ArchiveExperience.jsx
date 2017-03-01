import React from 'react';
import { Link } from 'react-router';

class ArchiveExperience extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      experience: this.props.location.query.experience,
      experience_id: this.props.location.query.id,
      best_memory: "",
      best_photo: "",
      success: false
    }
  }

  addToDatabase (event) {
    const url = "http://localhost:5000/archivedexperiences"
    event.preventDefault();
    const request = new XMLHttpRequest();
      request.open('POST', url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.withCredentials = true;
      request.onload = () => {
        if (request.status === 200){
          this.setState({success: true});
          this.removeFromBucketList();
        }
      }
      const data = {
          archivedexperience: {
          experience_id: this.state.experience_id,
          best_memory: this.state.best_memory,
          best_photo: this.state.best_photo
        }
      }
      console.log(data);
      request.send(JSON.stringify(data));
    }

    removeFromBucketList () {
      const url = "http://localhost:5000/bucketlistexperiences/"+ this.state.experience_id;
      event.preventDefault();
      const request = new XMLHttpRequest();
        request.open('DELETE', url);
        request.setRequestHeader('Content-Type', 'application/json');
        request.withCredentials = true;
        request.onload = () => {
          if (request.status === 200){
            console.log("deleted");
          }
        }
        request.send(null);
    }

  handleOnChangeMemory(event) {
      this.setState({best_memory: event.target.value})
    }

  handleOnChangePhoto(event) {
    this.setState({best_photo: event.target.value})
  }

 

  render () {
    var archiveExperienceDiv = 
      <div>
        <h4>Add this experience to my archive</h4>
        <form onSubmit={this.addToDatabase} className='bucketlist-form'>
          <input type="text" value={this.state.experience} />
          <input type="text" onChange={this.handleOnChangeMemory.bind(this)}  placeholder="What's your best memory?" />
          <input type="text" onChange={this.handleOnChangePhoto.bind(this)}  placeholder="Add a URL to your favourite photo" />
          

          <button onClick={this.addToDatabase.bind(this)}>Archive this experience </button>
        </form>
      </div>

      if(this.state.success){
        archiveExperienceDiv = <div>
          <h4> {this.state.experience} added to your archive!</h4>
          <Link className='bucket-list-link' to='/bucketlists'>Return to Bucket List</Link>
        </div>
      }

      return (
        <div>
          { archiveExperienceDiv }
        </div>
        );
  }
}

export default ArchiveExperience;