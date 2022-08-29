// Client facing scripts here
$(() => {
  const $userLogin = $('#user-login');
  const $userRegistration = $('#user-registration');
  const $userProfile = $('#user-profile');
  const $userStories = $('#user-stories');
  const $userContributions = $('#user-contributions');


  $userLogin.on('click', () => {
    alert('login attempt detected.  Nuclear launch initiated.  Unable to cancel.  Good job bro.');
  });

  $userRegistration.on('click', () => {
    alert('Illegal registration attempt.  Commando unit dispatched');
  });

  $userProfile.on('click', () => {
    alert('Unauthorized access, formatting primary drive');
  });




});
