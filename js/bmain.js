
var typingTimer;                //timer identifier
var doneTypingInterval = 1500;  //time in ms, 5 second for example
var $input1 = $('#name');
var $input2 = $('#lastName');
var $input3 = $('#email');

//on keyup, start the countdown
$input1.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping1, doneTypingInterval);
});

//on keydown, clear the countdown 
$input1.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping1 () {
  //do something

  $('#check1').prop('checked', true);
  $('#check2').prop('checked', false);
  $('#check3').prop('checked', false);
  $('#check4').prop('checked', false);
  $('.section2 .section7 span').text('');
  $('.section3 .section7 span').text('2');
  $('.section4 .section7 span').text('3');
  $('.section5 .section7 span').text('4');
  $('.section1 span').text('25%');
  $('.progress-circle').removeClass('p75').removeClass('p50').removeClass('p25').removeClass('p0').removeClass('p100').removeClass('over50');
  $('.progress-circle').addClass('p25');
}


//on keyup, start the countdown
$input2.on('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping2, doneTypingInterval);
  });
  
  //on keydown, clear the countdown 
  $input2.on('keydown', function () {
    clearTimeout(typingTimer);
  });
  
  //user is "finished typing," do something
  function doneTyping2 () {
    //do something
  
    $('#check2').prop('checked', true);
    $('#check3').prop('checked', false);
    $('#check4').prop('checked', false);
    $('.section3 .section7 span').text('');
    $('.section4 .section7 span').text('3');
    $('.section5 .section7 span').text('4');
    $('.section1 span').text('50%');
    $('.progress-circle').removeClass('p75').removeClass('p50').removeClass('p25').removeClass('p0').removeClass('p100');
    $('.progress-circle').addClass('over50 p0');
  }

//on keyup, start the countdown
$input3.on('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping3, doneTypingInterval);
  });
  
  //on keydown, clear the countdown 
  $input3.on('keydown', function () {
    clearTimeout(typingTimer);
  });
  
  //user is "finished typing," do something
  function doneTyping3 () {
    //do something
  
    $('#check3').prop('checked', true);
    $('#check4').prop('checked', false);
    $('.section4 .section7 span').text('');
    $('.section5 .section7 span').text('4');
    $('.section1 span').text('75%');
    $('.progress-circle').removeClass('p75').removeClass('p50').removeClass('p25').removeClass('p0').removeClass('p100');
    $('.progress-circle').addClass('over50 p75');
  }


$('input[type=radio]').on('change', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping4, doneTypingInterval);
  });

function doneTyping4 () { 
    $('#check4').prop('checked', true);
    $('.section5 .section7 span').text('');
    $('.section1 span').text('100%');
    $('.progress-circle').removeClass('p75').removeClass('p50').removeClass('p25').removeClass('p0').removeClass('p100');
    $('.progress-circle').addClass('over50 p100');
}