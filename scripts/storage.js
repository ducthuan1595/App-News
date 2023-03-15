"use strict";

// save to localStorage
function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// get data from localStorage
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// remove data from localStorage
function removeData(key) {
  return localStorage.removeItem(key);
}

////////////////////////////////////////////////////////
// get data users from local storage
const getAllUser = getFromStorage("userArr") ? getFromStorage("userArr") : [];
const userArr = getAllUser.map((user) => parseUser(user));
// console.log(userData)

function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.newsCategory
  );

  return user;
}

//////////////////////////////////////////////////////
// get data task from local storage
const getAllTask = getFromStorage("todoArr") ?? [];
const todoArr = getAllTask.map((task) => parseTask(task));

function parseTask(todo) {
  const task = new Task(todo.task, todo.owner, todo.isDone);

  return task;
}

//////////////////////////////////////////////////
// get current user
const currentUser = getFromStorage("currentUser") ?? {};

