"use strict";

// selected elements
const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");


btnSubmit.addEventListener("click", () => {
  // get data from form
  const data = new User(
    inputFirstName.value,
    inputLastName.value,
    inputUsername.value,
    inputPassword.value,
  );

  if (validate(data)) {
    userArr.push(data);
    if (userArr) {
      // save to localStorage
      saveStorage("userArr", userArr);
      // Chuyển trang đến màn hình login
      window.location.href = "../pages/login.html";
    }
  }
});

// process validate form
const validate = (dataInput) => {
  let isValidate = true;
  if (!dataInput.firstName.trim().length > 0) {
    alert(`Please, input field firstName`);
    isValidate = false;
  }
  if (!dataInput.lastName.trim().length > 0) {
    alert(`Please, input field lastName`);
    isValidate = false;
  }
  if (!dataInput.username.trim().length > 0) {
    alert(`Please, input field username`);
    isValidate = false;
  }
  // Username không được trùng với Username của các người dùng trước đó.
  if (userArr) {
    userArr.every((user) => {
      const filter = user.username === dataInput.username;
      if (filter) {
        alert(`Sorry, input field username is ready in use`);
        isValidate = false;
      }
    });
  }
  // Password phải có nhiều hơn 8 ký tự.
  if (dataInput.password.trim().length < 9) {
    alert(`Please, input field password should contain at least 8 characters`);
    isValidate = false;
  }
  // Password và Confirm Password phải giống nhau.
  if (inputPasswordConfirm.value !== dataInput.password) {
    console.log(dataInput.password)
    console.log(inputPasswordConfirm.value)
    alert(`Password don't match`);
    isValidate = false;
  }

  return isValidate;
};
