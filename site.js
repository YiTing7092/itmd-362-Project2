jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('html').addClass('hide');
  $('#tools-jump_p1').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('html').toggleClass('has-info');
    $('#P1_content').on('click', function(e) {
      $('html').removeClass('has-info');
    });
  });
  $('#tools-jump_p2').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('html').toggleClass('has-info');
    $('#P2_content').on('click', function(e) {
      $('html').removeClass('hide');
      $('html').removeClass('has-info');
    });
  });
  $('#tools-jump_p3').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('html').toggleClass('has-info');
    $('#P3_content').on('click', function(e) {
      $('html').removeClass('hide');
      $('html').removeClass('has-info');
    });
  });
})
