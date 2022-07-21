function Content(root) {
  var div = document.createElement("div");
  div.innerText = "Content";
  root.appendChild(div);
}

module.exports = Content;