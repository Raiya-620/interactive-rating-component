const submit = document.querySelector("#submit");
const select = document.querySelectorAll(".div5");
const div2 = document.querySelector("#div2");
const thankYouDiv = document.querySelector(".thank-you-div");
var number = "";

let selected = "";
select.forEach((item) => {
  item.addEventListener("click", apply);
});
submit.addEventListener("click", send);
function send() {
  if (selected == "") {
    return;
  }
  // location.href = "./index4.html";
  // hide the review page, and show the thank you page.
  div2.style.display = "none";
  thankYouDiv.style.display = "block";

  document.querySelector("#content").innerHTML = num;
}
function apply(e) {
  //   switch (e.target.innerText.toString()) {
  //     case "1":
  //       e.target.classList.add("active");
  //       break;
  //     case "2":
  //       e.target.classList.add("active");
  //       break;
  //     case "3":
  //       e.target.classList.add("active");
  //       break;
  //     case "4":
  //       e.target.classList.add("active");
  //       break;
  //     default:
  //       e.target.classList.add("active");
  //       break;
  //   }
  select.forEach((item) => {
    if (item.innerText == e.target.innerText) {
      selected = item.innerText;
      //   localStorage.setItem("selected", selected);
      // set the value of the local variable to track the selected rating
      num = selected;
      item.classList.add("active");
    } else if (item.innerText != e.target.innerText) {
      item.classList.remove("active");
    } else {
      return;
    }
  });
  //   console.log(e.target.innerText);
}
