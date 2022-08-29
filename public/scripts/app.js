// Client facing scripts here
$(() => {
  const $userLogin = $('#user-login');
  const $userRegistration = $('#user-registration');
  const $userProfile = $('#user-profile');
  const $userStories = $('#user-stories');
  const $userContributions = $('#user-contributions');

  const $contentArea = $('main');

  $userLogin.on('click', () => {
    $contentArea.empty();
    User.getHtmlLogin().appendTo($contentArea);
  });

  $userRegistration.on('click', () => {
    alert('Illegal registration attempt.  Commando unit dispatched');
  });

  $userProfile.on('click', () => {
    alert('Unauthorized access, formatting primary drive');
  });




});
