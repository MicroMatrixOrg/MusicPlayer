import reactDom from "react-dom/client";
import React from "react";
import { Index } from "@/template/Player";
import { svgContent } from "@/assets/icon";

let app = document.getElementById("app");
app ? true : (app = document.createElement("div"));
app.setAttribute("id", "app");

const stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, "text/html");
	return doc.body.firstElementChild;
};

const body = document.getElementsByTagName("body")[0];
let svgUrl = stringToHTML(svgContent);
svgUrl ? body.appendChild(svgUrl) : false;
body.appendChild(app);
const root = reactDom.createRoot(app);
root.render(<Index />);
