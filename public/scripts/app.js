try {
  const { User } = require("../../db/models/htmlModels");
} catch {
  // do nothing.
}

// Client facing scripts here
$(() => {
  const $userLogin = $('#user-login');
  const $userRegistration = $('#user-registration');
  const $userProfile = $('#user-profile');
  const $userStories = $('#user-stories');
  const $userContributions = $('#user-contributions');

  const $contentArea = $('main');

  if (!userId) {

    $userLogin.on('click', () => {
      $contentArea.empty();
      User.getHtmlLogin().appendTo($contentArea);
    });

    $userRegistration.on('click', () => {
      $contentArea.empty();
      User.getHtmlRegistration().appendTo($contentArea);
    });

  }

  $userProfile.on('click', () => {
    $contentArea.empty();
    User.getHtmlDetails().appendTo($contentArea);
  });




});
