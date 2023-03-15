'use strict'

class User {
  constructor(firstName, lastName, username, password, pageSize = 5, newsCategory = 'General') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;

    // settings user
    this.pageSize = pageSize
    this.newsCategory = newsCategory;

  }
}

// class task
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
