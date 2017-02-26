import React from 'react'

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
        <div className="bucketlistItem">
        <img className="homepage-pic" src={experience.experience.imageURL}></img>
          <button className="goToItem" key={index} value={index}>{experience.experience.title}</button>
        </div>
        );
      }.bind(this));
      return (
      <div id="experiences">
       
          {experiences}
    
      </div>
      );
  }
}

export default Experiences;