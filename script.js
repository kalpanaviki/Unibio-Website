$(document).ready(function() {
    // Check the initial state of the toggle checkbox
    if (localStorage.getItem('theme') === 'dark') {
      $('body').addClass('dark-theme');
      $('#toggle').prop('checked', true);
    }

    // Handle the toggle change event
    $('#toggle').on('change', function() {
      if ($(this).is(':checked')) {
        $('body').addClass('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        $('body').removeClass('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  });