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

  const $userId = $('#user-id').val();
  let $user;

  if($userId) {
    $('#fetch-user').on('click', () => {
      $.ajax({
        method: 'GET',
        url: `/api/users/${$userId}`
      })
        .done((response) => {
          user = new User(response.user);
        });
    });
  }

  const $contentArea = $('main');


  $userLogin.on('click', () => {
    $contentArea.empty();
    User.getHtmlLogin().appendTo($contentArea);
  });

  $userRegistration.on('click', () => {
    $contentArea.empty();
    User.getHtmlRegistration().appendTo($contentArea);
  });


  $userProfile.on('click', () => {
    $contentArea.empty();
    user.getHtmlDetails().appendTo($contentArea);
  });




});
