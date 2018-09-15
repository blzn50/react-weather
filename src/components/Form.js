import React from 'react';

const Form = props => (
  <div className="form">
    <h2>Fill out the city</h2>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city" />
      <input type="text" name="country" placeholder="country" />
      <button>Get Weather</button>
    </form>
  </div>
);

export default Form;
