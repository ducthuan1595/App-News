"use strict";

// selected elements
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");

// console.log(userArr)
// console.log(currentUser)

const settings = () => {
  btnSubmit.addEventListener("click", () => {
    if(Object.keys(userArr).length === 0 && Object.keys(currentUser).length === 0) return alert('Please, Login to settings news!');
    userArr.find((user) => {
      if (Number(inputPageSize.value) > 1) {
        if (user.username === currentUser.username) {
          // setting news page
          user.pageSize = Number(inputPageSize.value);
          user.newsCategory = inputCategory.value;

          // Save to local storage
          saveStorage("userArr", userArr);
          alert('Save settings successfully 🎉!');
        } else {
          console.log('click')
          inputPageSize.value = user.pageSize;
          inputCategory.value = user.newsCategory;
          
        }
      }
    });
  });
};
settings();
