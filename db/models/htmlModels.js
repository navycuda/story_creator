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
  getHtmlContributions() {
    return $('<span>Contributions Placeholder</span>');
  }
  async logout() {
    await $.ajax({
      method: 'DELETE',
      url: '/api/logout/'
    })
      .done((response) => {
        console.log(response);
      });
  }

  /**
   * Static Methods
   */
  static getHtmlLogin() {
    const $login = $('<div>');
    const $email = $('<input>')
      .attr('type', 'text')
      .attr('placeholder', 'Email');
    const $password = $('<input>')
      .attr('type', 'password')
      .attr('placeholder', 'Password');
    const $submit = $('<button>')
      .text('login');

    return $login.append($email, $password, $submit);
  }
  static getHtmlRegistration() {
    const $userRegistration = $('<div>');
    const $name = $('<input>')
      .attr('type', 'text')
      .attr('placeholder', 'username');
    const $email = $('<input>')
      .attr('type', 'email')
      .attr('placeholder', 'email');
    const $password = $('<input>')
      .attr('type', 'password')
      .attr('placeholder', 'password');
    const $confirmPassword = $('<input>')
      .attr('type', 'password')
      .attr('placeholder', 'confirm password');
    const $submit = $('<button>')
      .text('register');

    return $userRegistration.append($name, $email, $password, $confirmPassword, $submit);
  }
}

class Story {
  // name
  // contributor_id
  // owner_id
  // created_at
  // started_at
  // completed_at

  constructor(db_start) {
    console.log(`in User constructor :`, db_user);
    for (const [ key, value ] of Object.entries(db_user)) {
      this[key] = value;
    }
  }

  static async getStoriesByUserId(user_id, callback) {
    const searchUser = {};
    await $.ajax({
      method: 'GET',
      url: `/api/users/${user_id}`
    })
      .done((response) => {
        searchUser.id = response.user.id;
        searchUser.name = response.user.name;
        console.log(`ajax nested user`, response);
      });
    await $.ajax({
      method: 'GET',
      url: `/api/stories/${searchUser.id}`
    })
      .done((stories) => {
        const $myStories = $('<div>');
        const $title = $('<h2>').text(`The stories of ${searchUser.name}`);
        $myStories.append($title);
        console.log(`Is there stories?`,stories);
        console.log('stories.length = ', stories.length);
        if (stories.length === 0) {
          return callback($('<span>What do you mean I have no stories?!</span>'));
        }

        for (let s = 0; s < stories.length; s++) {
          console.log('Each individual story\n',stories[s]);
          const $story = $('<div>');
          const $storyTitle = $('<h3>').text(stories[s].name);

          $story.append($storyTitle);

          $myStories.append($story);
        }
        return callback($myStories);
      });

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
