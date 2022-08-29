// name: VARCHAR(255)
// email: VARCHAR(255)
// password: VARCHAR(255)

class User {
  // Remember the id, it's issued by the database
  constructor(db_user) {
    console.log(`in User constructor :`, db_user);
    for (const [ key, value ] of Object.entries(db_user)) {
      this[key] = value;
    }
  }
  getSingleDetail() {
    return $(`<li class="user">`).text(this.name);
  }
}

if (module) {
  module.exports = User;
}
