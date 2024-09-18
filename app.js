let display = document.querySelector(".container input");
let keys = document.querySelector(".keys").querySelectorAll("button");

keys.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.value);
    display.value += btn.value;
  });
});

function clearScreen() {
  display.value = "";
}

function ansWer() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
