// name: VARCHAR(255)
// email: VARCHAR(255)
// password: VARCHAR(255)

class User {
  // Remember the id, it's issued by the database
  constructor(db_user) {
    this.name = db_user.name;
    this.email = db_user.email;
    this.password = db_user.password;
  }
  getDetails() {
    return 'There be details here';
  }
}

module.exports = User;
