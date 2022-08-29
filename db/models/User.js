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
  outputToConsole() {
    console.log(this);
  }
  getHtml_UserDetails() {
    const result = $('<div>');
    const name = $('<h2>').text(this.name);
    const email = $('<span>').text(this.email);


    return result;
  }
}

try {
  if (module) {
    module.exports = User;
  }
} catch (error) {
  // Do nothing.  Nothing at all.
}
