import React from 'react';

const Form = props => (
  <div className="form">
    <h2>Find weather in your city</h2>
    <form onSubmit={props.getWeather} onKeyPress={props.handleKeyPress}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form>
  </div>
);

export default Form;
