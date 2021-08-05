import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import "./home.css";
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      zipcode: ''
    }
  }
  
  getCurrentZipData(url, date, zipcode){
    axios.get(url, {}).then(res => {
      const data = res.data
      console.log(data)
  
      const currentZipInformation = data.map(zc =>
        <table className = "table" > 
          <div className = "tr" >
            <td className = "td">{zc.ReportingArea},{zc.StateCode}</td>
            <td className = "td"> {zipcode}</td>
            <td className = "td"> {zc.Date}</td>
            <td className = "td"> {zc.ParameterName} Index: {this.checkAQI(zc.AQI)} </td>
           
          </div>
        </table>

        )
      this.setState({
        currentZipInformation
      })

      //console.log(this.state.currentZipInformation);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  getForeCastZipData(url, date, zipcode){

    axios.get(url, {}).then(res => {
      const data = res.data
      console.log("Data", data)
      const zipInformation = data.map(zc =>
        <table className = "table" >
          <div className = "tr" >
            <td className = "td"> {zc.ReportingArea}, {zc.StateCode}</td>
            <td className = "td"> {zipcode}</td>
            <td className = "td"> {zc.DateForecast}</td>
            <td className = "td"> {zc.ParameterName} : {this.checkAQI(zc.AQI)} </td>
          </div>
        </table>
  
      )

      this.setState({
        zipInformation
      })

      //console.log(this.state.zipInformation);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  checkAQI(aqi){
    if(aqi === "-1"){
      return "Currently Not Avaliable";
    }
    else{
      return aqi
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    const data = this.state
    var date = moment().format("YYYY-MM-DD")
    //console.log(date)
    var ForecastUrl = `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${data.zipcode}&date=${date}&distance=25&API_KEY=90ADDB53-5F80-485E-8627-6A77A1F86C58`
    var currentUrl = `https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${data.zipcode}&distance=25&API_KEY=90ADDB53-5F80-485E-8627-6A77A1F86C58`
    //this.getZipData(url)

    this.getForeCastZipData(ForecastUrl, date, data.zipcode)
    this.getCurrentZipData(currentUrl, date, data.zipcode)
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
        <div className="home">
          <div className="left">
            <div>
              <form className="form" onSubmit={this.handleSubmit}>
                <h1 className="h1">Enter ZipCode to Check Air Quality </h1>
                <p>
                  <input
                    className="input"
                    type="text"
                    width="200px"
                    padding="10px"
                    boarder="0"
                    box-shadow=" 0 0 15px 4px rgba (0,0,0,0.06)"
                    boarder-radius="10px"
                    placeholder="zipcode"
                    value={zipcode}
                    name="zipcode"
                    required={true}
                    onChange={this.handleInputChange}
                  />
                </p>
                <button className="button">Submit</button>
              </form>
            </div>
          </div>
          <div></div>
          {/* <br></br> */}
          
          <div className="rightcontainer">
            <div className="topcontainer">
                <table className = 'table'>
                  <tr className = "tr">
                    <th className = 'th'>Current Air Quality</th>
                  </tr>
      
                  <p> {this.state.currentZipInformation} </p>
                </table>
            </div>
            <div className="topcontainer">
              <div className="forecastAirQuality">
               
                <table className = 'table'>
                  <tr className = "tr">
                    <th className = 'th'>Air Quality Forecast</th>
                  </tr>
                  {this.state.zipInformation}
                </table>
              </div>
          </div>
        </div>
      </div>
      );
}
};
export default Home;