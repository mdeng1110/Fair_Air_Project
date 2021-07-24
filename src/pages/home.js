import React, { Component } from 'react';

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      zipcode: '1'
    }
    this.state = {
      zipInformation: []
    }
  }
  async componentDidMount(url){
    const response =  await fetch(url);
    const data =  await response.json();
    console.log("State Code:" , data[0]["StateCode"])
    console.log("AQI:" , data[0]["AQI"])
    //if AQI = -1 double the radius or give user 
    //option to increase radius
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    const data = this.state
  
    //get todays date and change the route
    var route = `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${data.zipcode}&date=2021-07-21&distance=25&API_KEY=${process.env.REACT_APP_API_KEY}`
    this.componentDidMount(route)
  }
  handleInputChange = (event) =>{
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render (){
    const {zipcode} = this.state
    return (
      <div>
         <div> 
          <h3>Enter ZipCode to Check AirQuality</h3>
          <form onSubmit = {this.handleSubmit}>
            <p><input type = 'text'  value = {zipcode} name = 'zipcode'  onChange={this.handleInputChange}/></p>
            <p> <button> Submit ZipCode </button></p>
          </form>
         </div>
      </div>
    )
  }
}
export default Home;