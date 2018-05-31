import React from "react";

const Form = props =>(
  <form onSubmit={props.getWeather} className="form-inline">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="">City and Country</span>
      </div>
      <input type="text" name="city" placeholder="Enter name of the city" className="form-control"></input>
      <input type="text" className="form-control" name="country" placeholder="Enter name of the country"></input>
      <button className="btn btn-secondary" type="submit">Get Weather</button>
    </div>
  </form>
);
export default Form;
