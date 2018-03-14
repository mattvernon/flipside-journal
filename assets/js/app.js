// MOBILE NAV ===========================================

$('#nav-icon3').click(function(){

  // open hamburger icon, animate and change color
  $(this).toggleClass('open');

  // 2. show mobile header
  $('.mobile-nav').toggleClass('open')

  // 3. fix the body so you can't scroll
  $('body').toggleClass('hidden')

  return false

});

// GIFT CARD BUILDER ===============================================

$(document).ready(function(){
  console.log("JS is WORKING");
})

$('#print-link').click(function(){

  $('#print-link').addClass('selected')
  $('#print-details').show()
  $('#email-link').removeClass('selected')
  $('#email-details').hide()
  return false;

});

$('#email-link').click(function(){

  $('#email-link').addClass('selected')
  $('#email-details').show()
  $('#print-link').removeClass('selected')
  $('#print-details').hide()
  return false;

});

// disable date picker / asap button

$('.asap-button').click(function(){

  $('.asap-button').toggleClass('selected')

    if ($('#delivery-date').attr("disabled")) {
        $('#delivery-date').removeAttr("disabled");
    } else {
        $('#delivery-date').attr("disabled", "disabled");
    }

  return false

});

// Slider is in html page due to problems initalizing Siema

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
