// constantes
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");

// variables
let counter = document.querySelector("#whichCount");

// functions
let increaseFunc = () => {
  counter.style.color = "green";
  if (counter.innerHTML < 0) {
    counter.style.color = "indianred";
  }
  counter.innerHTML++;
};

let decreaseFunc = () => {
  counter.style.color = "indianred";
  if (counter.innerHTML > 0) {
    counter.style.color = "green";
  }
  counter.innerHTML--;
};

let resetFunc = () => {
  counter.innerHTML = 0;
  counter.style.color = "black";
};

increase.addEventListener("click", () => {
  increaseFunc();
  if (counter.innerHTML == "0") {
    counter.style.color = "black";
  }
});

decrease.addEventListener("click", () => {
  decreaseFunc();
  if (counter.innerHTML == "0") {
    counter.style.color = "black";
  }
});

reset.addEventListener("click", () => {
  resetFunc();
});
