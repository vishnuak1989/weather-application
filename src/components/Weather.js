import React from "react";
const Weather = props =>(
  <div>

{props.city && props.country && <div className="jumbotron bg-secondary text-white">  <p>Location:{props.city},{props.country}</p>
{props.temperature && <p>Temperature:{props.temperature}℃</p>}
{props.humidity && <p>Humidity:{props.humidity}</p>}
{props.description && <p>Conditions:{props.description}</p>}
  </div>
}
{props.error && <p>{props.error}</p>}
</div>
);
export default Weather;
