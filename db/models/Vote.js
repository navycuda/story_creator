// db/models/Vote.js
class Vote {
  // id
  // event_id
  // owner_id
  // story_id
  // up_votes
  // dn_votes
  constructor(owner_id, story_id, event_id, vote) {
    this.owner_id = owner_id;
    this.story_id = story_id;
    this.event_id = event_id;
    this.setVote(vote);
  }
  setVote(vote) {
    delete this.up_votes;
    delete this.dn_votes;
    vote ? this.up_votes = 1 : this.dn_votes = 1;
  }
}
