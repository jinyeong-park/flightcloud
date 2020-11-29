import React from 'react';

class FlindFlights extends React.Component {

  // onChangeHandler(event) {
  //   console.log('onChangeHandler', event.target.value)
  // }

  handleSubmit(event) {
    this.props.history.push('displayFlights/' + this.from +'/'+ this.to + '/'+ this.departureDate)

  }

  render() {
    return (
      <div>
        <h2>Find Flights:</h2>
        <form>
        From:<input type='text' name='from' onChange={(event)=>{this.from=
        event.target.value}}/>
        To:<input type='text' name='to' onChange={(event) => {this.to=event.target.value}}/>
          {/* From:<input type='text' name='from' onChange={this.onChangeHandler.bind(this)}/>
          To:<input type='text' name='to' onChange={this.onChangeHandler.bind(this)}/> */}
          Departure Date:
          <input type='text' name='departureDate'/>
          <button onClick={this.handleSubmit.bind(this)}>Search</button>

        </form>
      </div>
    )
  }


}

export default FlindFlights;