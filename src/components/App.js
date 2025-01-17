import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleFilterChange = (newType) => {
    this.setState({
      filters:{
        type: newType
      }
    })
  }

  onAdoptPet = (id) =>{
    // console.log(id)
    this.state.pets.forEach(pet =>{
      if (pet.id === id) {
        pet.isAdopted = true
        // console.log(pet)
      }
    })
  }

  handleFindPetsClick = () => {
    let that = this
    if (this.state.filters.type === "all"){
      fetch("/api/pets")
      .then(function(resp){return resp.json()})
      .then(function(data){
        that.setState({
          pets: [...data]
        })

      })
    }else{
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(function(resp){
        return resp.json()
      })
      .then(function(data){
        that.setState({
          pets: [...data]
        })
      })
      
    }

  
    
    
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.handleFilterChange} onFindPetsClick = {this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet = {this.onAdoptPet} petsArray = {this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
