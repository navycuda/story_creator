// Client facing scripts here
$(() => {
  // Get the entire users list
  $('#fetch-users').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
      .done((response) => {
        const $usersList = $('#users');
        $usersList.empty();

        for (const user of response.users) {
          $(`<li class="user">`).text(user.name).appendTo($usersList);
        }
      });
  });
  // Get a user by id
  $('#fetch-user').on('click', () => {
    const id = $('#user-id').val();
    console.log(id);
  });
});
