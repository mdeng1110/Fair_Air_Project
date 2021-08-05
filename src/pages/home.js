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
                    required="true"
                    onChange={this.handleInputChange}
                  />
                </p>
                <button className="button">Submit</button>
              </form>
            </div>
          </div>
          <div></div>
          <div className="rightcontainer">
            <div className="topcontainer">
              <h2 text-align = "center">Current Air Quality</h2>
              
              <table className = 'table'>
                <tr className ='tr'>
                  <th className = 'th'>State</th>
                  <th className = 'th'>ZipCode</th>
                  <th className = 'th'>AQI</th>
                  <th className = 'th'>pm2.5</th>
                </tr>
                <tr>
                  <td className = 'td'>CA</td>
                  <td className = 'td'>{zipcode}</td>
                  <td className = 'td'>100</td>
                  <td className = 'td'>20</td>
                </tr>
              </table>
             {/* <p> {this.state.zipInformation} </p> */}
            </div>
            <div className="topcontainer">
              <h2>Air Quality Forecast</h2>
              <table className = 'table'>
                <tr className ='tr'>
                  <th className = 'th'>State</th>
                  <th className = 'th'>ZipCode</th>
                  <th className = 'th'>AQI</th>
                  <th className = 'th'>pm2.5</th>
                </tr>
                <tr>
                  {/*<td className = 'td'>{this.state.zipInformation.get('State')}</td>*/}
                  <td className = 'td'>CA</td>
                  <td className = 'td'>{zipcode}</td>
                  <td className = 'td'>100</td>
                  <td className = 'td'>20</td> 
                </tr>
                <tr>
                  <td className = 'td'>CA</td>
                  <td className = 'td'>{zipcode}</td>
                  <td className = 'td'>100</td>
                  <td className = 'td'>20</td> 
                </tr>
              </table>
            </div>
          </div>
        </div>
      );
}
};
export default Home;