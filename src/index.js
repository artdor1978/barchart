import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import BarChart2 from "./BarChart2";
import GenerateData from './data'
const App = () => <GenerateData />;

ReactDOM.render(<App />, document.querySelector("#container"));

if (module.hot) {
   module.hot.accept();
}
//https://wattenberger.com/blog/d3#grabbing-data
