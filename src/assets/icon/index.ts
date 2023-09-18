import prev from "./caret-left-fill.svg";
import next from "./caret-right-fill.svg";
let res = [prev, next];

export const svgContent = ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">${res.join(
	""
)}</svg>`;
