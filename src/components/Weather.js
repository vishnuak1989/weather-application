import React from "react";

const Capitalize=(str)=>(str.charAt(0).toUpperCase() + str.slice(1));

const Weather = props =>(
  <div className="weather">

{props.city && props.country && <div className="alert alert-dismissible alert-success">  <h4 className="alert-Heading">Location: {props.city}, {props.country}</h4>
{props.temperature && <p>Temperature:<span className="weather__val"> {props.temperature}℃</span></p>}
{props.humidity && <p>Humidity: <span className="weather__val">{props.humidity}</span></p>}
{props.description && <p>Conditions: <span className="weather__val">{Capitalize(props.description)}</span></p>}
<button type="button" className="close"  onClick={props.closeAlert} data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>

  </div>
}

{props.error &&<div className="alert  alert-dismissible alert-warning" role="alert"> <p className="alert-Heading">{props.error}</p>

<button type="button" className="close"  onClick={props.closeAlert} data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>}

</div>
);
export default Weather;
