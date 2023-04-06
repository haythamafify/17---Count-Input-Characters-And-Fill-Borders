let div = document.querySelector("div");
let input = document.querySelector("input");
let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let maxlength = input.getAttribute("maxlength");

count.innerHTML = maxlength;

input.oninput = function () {
  count.innerHTML = maxlength - input.value.length;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");

  progress.style.width = `${(this.value.length * 100) / maxlength}%`;
  if (progress.style.width == "100%") {
   progress.classList.add("progressred")
  }else{
   progress.classList.remove("progressred")

  }


};
