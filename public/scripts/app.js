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
  let $rightColumn = $('#right-column');

  const $newestStories = $('#newest-stories');
  const $popularStories = $('#most-popular');
  const $myStories = $('#my-stories');

  let $linkToStory = $('.link-to-story');


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


  // $(document).click((event) => {
  //   alert(event.target.className);
  // });


  $newestStories.on('click', () => {
    $rightColumn.empty();
    Story.getNewStories($rightColumn);
  });

  $popularStories.on('click', () => {
    $rightColumn.empty();
    Story.getPopularStories($rightColumn);
  });

  $myStories.on('click', () => {
    $rightColumn.empty();
    Story.getStoriesByUserId(user.id, ($element) => {
      $rightColumn.append($element);
      $linkToStory = $element.find('.link-to-story');

      console.log($linkToStory.attr('href'));

      $linkToStory.each((index) => {
        console.log($(this).attr('href'));
      });

      $linkToStory.on('click', (e) => {
        e.preventDefault();
        console.log($(this));
      });
      // $linkToStory.click((e) => {
      //   $(this).click((e) => {
      //     e.preventDefault();
      //     console.log('object object', this);
      //     console.log(`e`,e);
      //   });
      // });
    });
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
