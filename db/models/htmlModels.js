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

  static async getStoriesByUserId(user_id, element) {
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
      url: `/api/stories/mine/${searchUser.id}`
    })
      .done((stories) => {
        const $myStories = $(stories);
        element.append($myStories);
      });

  }



  static async getNewStories(element) {
    await $.ajax({
      method: 'GET',
      url: 'api/stories/new'
    })
      .done((storyBlock) => {
        const $block = $(storyBlock);
        element.append($block);
      });
  }

  static async getPopularStories(element) {
    await $.ajax({
      method: 'GET',
      url: 'api/stories/popular'
    })
      .done((storyBlock) => {
        const $block = $(storyBlock);
        element.append($block);
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
