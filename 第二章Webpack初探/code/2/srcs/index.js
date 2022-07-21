// import Header from "./header.js";
// import Sidebar from "./sidebar.js";
// import Content from "./content.js";
var Header = require("./header.js");
var Sidebar = require("./sidebar.js");
var Content = require("./content.js");

var root = document.getElementById("root");

new Header(root);
new Sidebar(root);
new Content(root);