import * as d3 from "d3";
export const generateData = () => {
	const url =
		"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

	return d3
		.json(url)
		.then(res => {
			alert(res.data);
		})
		.catch(() => {
			alert("Oh no, something horrible happened!");
		});
};

export default generateData();
