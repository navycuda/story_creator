// name: VARCHAR(255)
// email: VARCHAR(255)
// password: VARCHAR(255)

class User {
  // Remember the id, it's issued by the database
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
