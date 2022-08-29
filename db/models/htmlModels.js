// db/models/htmlModels.js

class User {
  // name: VARCHAR(255)
  // email: VARCHAR(255)
  // password: VARCHAR(255)
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
  getHtmlDetails() {
    const result = $('<div>');
    const name = $('<h2>').text(this.name);
    const email = $('<span>').text(this.email);

    result.append(name, email);

    return result;
  }
}

class Story {
  // name
  // contributor_id
  // owner_id
  // created_at
  // started_at
  // completed_at

  constructor(name, owner_id) {
    this.name = name;
    this.owner_id = owner_id;

    const timeStamp = Date.now();

    this.created_at = timeStamp;
    this.started_at = timeStamp;
    this.completed_at = timeStamp;
  }
}

// Currently there is some use of these classes server side.
// This try catch prevents the browswer from throwing a
// reference error on module
try {
  if (module) {
    module.exports = {
      User,
      Story
    };
  }
} catch (error) {
  // Do nothing.  Nothing at all.
}
