import * as d3 from "d3";
import BarChart2 from "./BarChart2";

export const GenerateData = () => {
	const url =
		"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

	return d3
		.json(url)
		.then(res => {
			updateData(res.data.map(x => x[0]));
		})
		.catch(() => {
			alert("Oh no, something horrible happened!");
		});
};
const updateData = (data) => {
	return (
		const year = data;
		console.log(year)
		)
}

export default GenerateData();
