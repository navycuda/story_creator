# Story Creator

The story teller application based losely around D&D campaign creation.

## Introduction


## FRIDAY AUGEST 26, 2022
### BASE PLANNING

  [X] - Scheduling conflicts
    [X] - Shane - Drivers licence - Thursday Sept 1.

  [ ] - Core app planning
    [ ] - Functions
      USERS
        Start story
          Owns story
        Submit to other stories
          can only contribute, cannot own the story


          

    [ ] - Database
    [X] - UI
      [X] - Target Devices
        1st - Desktop
        2nd - Tablet
      [X] - Single or Multi page app
        Mult-page App
      [X] - Story presentation
    [ ] - Finalizing template setup
          Get the master to the point that we can branch off for 
          individual development goals
    [ ] - Conventions
<<<<<<< HEAD
      [ ] - git
      [ ] - naming
      [ ] - developer overlap 
    [ ] - scheduling and deadlines for features
=======
      [X] - git
        Lots of communications!
        sperate branches,
          collabortate on reassembly
      [ ] - naming
      [X] - developer overlap 
    [X] - scheduling and deadlines for features
>>>>>>> feature/html

## Goals for Monday tailgate

[ ] - come up with a title for the app
  idea 1  - Storyteller
          - RpgWebWeaver
          - RpgStoryMaster
          - StoryMaster
          - MythMaster (yeah yeah I know a lot of master... but it works, what can I say?)
[ ] - meetup with a mentor/instructor to get some idea of how realistic our goals are
[ ] - finalize colour scheme
[ ] - pick fonts
[ ] - story summary vs default (first one or two sentences)
[ ] - endpoints = '/'
                  '/register'
                  '/id:'   <-- login then redirect to main page
                  '/profile/id:' <---- for viewing yours and others' profile pages
                  '/id:/my_stories' <--- page of all stories
                  '/id:/submit'
                  '/id:/contribute'
                  '/most_popular'
                  '/most_recent'
[ ] -  inquire about it's possible to utilize https://rapidapi.com/bionic-reading-bionic-reading-default/api/bionic-reading1/details API to change all long forms of text to bionic reading.

### Db design notes

#### Theory of operation

database tables have been modeled as objects.  Each object will be responsible for its own interaction with the database, so from the server code perspective we're only dealing with classes.  I believe this will also dramatically simplify transferring the different datatypes and may even further open up a serious look at using a single page app.

#### need Forms
  [ ] - Create/Edit User
  [ ] - Create/Edit Story
  [ ] - Create/Edit Event
  [ ] - Create/Edit Event Type
  [ ] - Create/Edit Character

#### cast
  For the time being I'm leaving out cast as I feel it is redundant to he job of the character table, however I'm not going to remove it from the erd yet.

#### assets
  Also leaving assests out until a bit further into design.  I don't have a clear picture of how I'm going to interact with the front end, so I'll leave options open.

  users.avatars?

#### upvotes => votes
  Added vote.  The idea here is that a vote value is applied to the vote.  This will allow there to be both upvotes and down votes, if so desired.

  From the application side I believe the upvote class should be made by combining all the upvote values into one...
    > changed to votes, gave up and dn vote values for overall picture

#### Require explaination of how db:reset works
  Since I built my own sort of manual build file, I finally got around to trying the db:reset and it does not work with the way I currently have my queries setup.

  db:reset now works

### Some other things to think about / TODO

  [ ] - install cookie-sessions for login
  [ ] - decide if completing the login/registration page 
        or taking the easy way out

