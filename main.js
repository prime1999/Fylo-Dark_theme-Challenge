const form = document.querySelector(".form");
const msg = document.querySelector(".msg");
const input = document.querySelector(".input");

const onSubmit = (e) => {
  e.preventDefault();
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showMsg("success", `Confirmation mail has been sent to '${input.value}'`);
  } else {
    showMsg("error", "Please enter a valid email");
  }
  input.value = "";
};

const showMsg = (text, textStyle) => {
  msg.classList.add(text);
  msg.innerText = textStyle;
};

form.addEventListener("submit", onSubmit);
