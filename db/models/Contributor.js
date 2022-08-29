// db/models/Contributor.js

class Contributor {
  // Don't forget the id is address by the database!
  constructor(user_id, story_id) {
    this.user_id = user_id;
    this.story_id = story_id;
  }
}
