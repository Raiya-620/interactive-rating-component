const content = document.querySelector("#content");
if (localStorage.getItem("selected")) {
  content.innerText = localStorage.getItem("selected");
}
