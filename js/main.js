var $veggies = $('.veggies');

$veggies.waypoint(function (direction) {
  if (direction == 'down') {
    $veggies.addClass('js-veggies-animate');
  } else {
    $veggies.removeClass('js-veggies-animate');
  }
}, {offset: '50%'});

$('div').on('click', function (e) {
  $(this).toggleClass('is-clicked');
});

dfasdfas
aadsdas
adaSDsd
fsadfasdf
fasdfa
