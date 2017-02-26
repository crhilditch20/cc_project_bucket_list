import React from 'react';
import { Link } from 'react-router';

class Experiences extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedExperienceID: null
    }
  }

  render () {
    var experiences = this.props.experiences.map(function(experience, index){
      return (
        <div key={index} className="bucketlistItem">
        <img className="homepage-pic" src={experience.experience.imageURL}></img>
          <button className="goToItem" key={index} value={index}>{experience.experience.title}</button>
        </div>
        );
      }.bind(this));
      return (
      <div id="experiences">
       <h4>Experiences</h4>
       <Link className="add-new" to='/experiences'>Add new</Link>
          {experiences}
    
      </div>
      );
  }
}

export default Experiences;