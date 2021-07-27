import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      zipcode: ''
    }
  }
  getZipData(url){
    axios.get(url, {}).then(res => {
      const data = res.data
      console.log(data)
      const zipInformation = data.map(zc =>
        <div>
          <p>AQI: {zc.AQI}</p>
          <p>Date: {zc.DateForecast}</p>
          <p>State: {zc.StateCode}</p>
        </div>
        )
      this.setState({
        zipInformation
      })
      console.log(this.state.zipInformation);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    const data = this.state
    var date = moment().format("YYYY-MM-DD")
    //console.log(date)
    var url = `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${data.zipcode}&date=${date}&distance=25&API_KEY=90ADDB53-5F80-485E-8627-6A77A1F86C58`
    this.getZipData(url)
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
          <br></br>
          <form onSubmit = {this.handleSubmit}>
            <p><input type = 'text'  value = {zipcode} name = 'zipcode'  onChange={this.handleInputChange}/></p>
            <p><button> Submit ZipCode </button></p>
          </form>
          <br></br>
         </div>
         <div>
          <h3> Information from API</h3>
          <p> {this.state.zipInformation} </p>
        </div>
      </div>
    )
}
};
export default Home;