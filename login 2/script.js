$(document).ready(function() {
    $('#loginForm1').on('submit', function(event) {
      event.preventDefault();
      const username = $('#username').val();
      const password = $('#password').val();
  
      if (username === 'user' && password === 'password') {
        $('#message').text('Login successful!').css('color', 'green');
      } else {
        $('#message').text('Invalid username or password!');
      }
    });
  });
  