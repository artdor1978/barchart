import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
/*import BarChart2 from './BarChart2'
import generateData from './data'*/
const App = () => {
    const url =
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

   return d3
      .json(url)
      .then(res => {
         console.log(res.data.map(x=>x[0]));
      })
      .catch(() => {
         alert("Oh no, something horrible happened!");
      });
}

ReactDOM.render(<App />, document.querySelector("#container"));

if (module.hot) {
   module.hot.accept();
}
//https://wattenberger.com/blog/d3#grabbing-data