import React from "react";

const Form = props =>(
  <div className="formComponent">
  <form onSubmit={props.getWeather} className="form-inline">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="">City & Country</span>
      </div>
      <div className="forminput">
      <input type="text" name="city" placeholder="City Name" className="form-control"></input>
      </div>
      <div className="forminput">
      <input type="text" className="form-control" name="country" placeholder="Country Name/Code"></input>
      </div>
      <div>
      <button className="btn btn-secondary" type="submit">Get Weather</button>
    </div>
    </div>
  </form>
  </div>
);
export default Form;
