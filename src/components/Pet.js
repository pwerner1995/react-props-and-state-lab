import React from 'react'

class Pet extends React.Component {
  state = {
    name: this.props.pet.name,
    gender: this.props.pet.gender,
    age: this.props.pet.age,
    weight: this.props.pet.weight,
    isAdopted: this.props.pet.isAdopted,
    type: this.props.pet.type
  }
  
  HandleAdoptPet = () =>{
    this.props.onAdoptPet(this.props.pet.id)
    this.setState({
      isAdopted: true
    })
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.state.gender === "male" ?  '♂' : "♀"}
            {this.state.name}
          </a>
          <div className="meta">
            <span className="date">{this.state.type}</span>
          </div>
          <div className="description">
            <p>Age:{this.state.age}</p>
            <p>Weight: {this.state.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.state.isAdopted? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick ={this.HandleAdoptPet} >Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
