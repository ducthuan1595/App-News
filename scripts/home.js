'use strict'

// selected elements
const loginModal = document.getElementById('login-modal');
const mainContent = document.getElementById('main-content');
const welcomeMessage = document.getElementById('welcome-message');
const btnLogout = document.getElementById('btn-logout');

// check current user has empty
const currentUserEmpty = Object.keys(currentUser).length === 0;

if(!currentUserEmpty && currentUser !== 'undefined') {
  loginModal.classList.add('d-none');
  mainContent.classList.add('d-block');
  welcomeMessage.innerText = `Welcome ${currentUser.firstName}`;
}else {
  loginModal.classList.remove('d-none');
  mainContent.classList.remove('d-block');
}

// when user hit btn logout
btnLogout.addEventListener('click', ()=> {
  removeData('currentUser');

  // Chuyển trang đến màn hình login
  window.location.href = "pages/login.html";
})

