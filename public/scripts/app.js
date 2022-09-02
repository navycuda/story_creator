try {
  const {
    User,
    Story
  } = require("../../db/models/htmlModels");
} catch (_) {
  // do nothing.
}

// Client facing scripts here
$(() => {
  const $userLogin = $('#user-login');
  const $userLogout = $('#user-logout');
  const $userRegistration = $('#user-registration');
  const $userProfile = $('#user-profile');
  const $userStories = $('#user-stories');
  const $userContributions = $('#user-contributions');

  const $userId = $('#user-id').val();
  const $userEmail = $('#user-email').val();

  const $contentArea = $('main');
  const $leftColumn = $('#left-column');
  const $rightColumn = $('#right-column');

  const $newestStoires = $('#newest-stories');

  let user;

  if ($userId) {
    $.ajax({
      method: 'GET',
      url: `/api/users/${$userId}`
    })
      .done((response) => {
        console.log('if($userId)',response);
        user = new User(response.user);
      });
  }


  // Using form and a page reload on so this specific
  // task may no longer have a use.

  // $userLogin.on('click', () => {
  //   //$contentArea.empty();
  //   //User.getHtmlLogin().appendTo($contentArea);
  //   alert('login LogOn friend!');
  // });

  $newestStoires.on('click', () => {

    $rightColumn.empty();

    Story.getNewStories($rightColumn);


  });

  $userLogout.on('click', () => {
    window.location.replace('/logout');
  });

  $userRegistration.on('click', () => {
    $contentArea.empty();
    User.getHtmlRegistration().appendTo($contentArea);
  });

  $userProfile.on('click', () => {
    $contentArea.empty();
    user.getHtmlDetails().appendTo($contentArea);
  });

  $userStories.on('click', () => {
    $contentArea.empty();
    Story.getStoriesByUserId(user.id, (stories) => {
      stories.appendTo($contentArea);
    });
  });

  $userContributions.on('click', () => {
    $contentArea.empty();
    user.getHtmlContributions().appendTo($contentArea);
  });


  // Collapsible script

  const coll = document.getElementsByClassName("collapsible");
  let i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});
