// db/models/Event.js
class Event {
  // id
  // story_id
  // owner_id
  // event_type_id
  // name
  // details
  // created_at
  // accepted_at
  constructor(story_id, owner_id, event_type_id, name) {
    this.story_id = story_id;
    this.owner_id = owner_id;
    this.event_type_id = event_type_id;
    this.name = name;
    this.created_at = Date.now();
  }
}
