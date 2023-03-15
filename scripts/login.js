"use strict";

// selected elements
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

// get first name of current user
let firstName = "";

//hand event when click login confirm
btnSubmit.addEventListener("click", () => {
  const data = {
    username: inputUsername.value,
    password: inputPassword.value,
  };

  if (validate(data)) {
    data.firstName = firstName;
    console.log('click')
    // save current user to local storage
    saveStorage("currentUser", data);
    // next page home
    window.location.href = "../index.html";
  }
});

// process invalidate
const validate = (data) => {
  let isValidate = false;
  if (userArr) {
    let isIncorrect = false;
    // find user match with register
    userArr.find((user) => {
      if (user.username === data.username && user.password === data.password) {
        firstName = user.firstName;
        return (isIncorrect = true);
      } else {
        return (isIncorrect = false);
      }
    });
    if (isIncorrect) {
      isValidate = true;
    } else {
      isValidate = false;
      alert("Incorrect information!");
    }
  } else {
    isValidate = false;
    return alert("Incorrect information!");
  }
  return isValidate;
};
