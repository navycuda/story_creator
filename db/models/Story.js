// db/models/Story.js

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
