import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const Mein = () => {
  const [cityName, setcityName] = useState("");
  const [data, setData] = useState([]);

  const Handler = async (e) => {
    e.preventDefault();
    console.log("I am SubmitHandler clicking");

    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=b5a18523c6303ec0dc5d8f9cb7b7ba45&units=metric`
      );
      setData(response.data.list);

      console.log("response", response);
    } catch (error) {
      console.log("error in Api calling ", error);
    }
  };
  return (
    <div>
      <h3>
        <form onSubmit={Handler}>
          City Name :{" "}
          <input
            type="text"
            className="input-tape"
            placeholder="inter Your city Name"
            required
            onChange={(e) => {
              // console.log(e.target.value);
              setcityName(e.target.value);
            }}
          />
          <button className="btn-app" type="submit">
            {""}
            Get Weather
          </button>
        </form>
        {
        // data.map((eachcard, ind) => (
        //   <div key={ind}>
        //     <h1>{eachcard.dt_txt}</h1>

        //     <h1> {eachcard.main.temp} </h1>
        //     <span>
        //       {" "}
        //       Minimum : {eachcard.main.temp_min} - - Maximum{" "}
        //       {eachcard.main.temp_max}{" "}
        //     </span>
        //   </div>
        // ))
        data.map((eachcard, ind) => (
          <WeatherCard key={ind}
          name={eachcard.name}
          date={eachcard.dt_txt}
          temp={eachcard.main.temp}
          min={eachcard.main.temp_min}
          max={eachcard.main.temp_max}
          />
            
        ))
        }
      </h3>
    </div>
  );
};

export default Mein;
