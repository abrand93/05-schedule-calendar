var today = dayjs()
$('#currentDay').text(today.format('MMM D,YYYY, h:mm:ss'))
var currentHour = today.format('H')

var saveButton = document.querySelectorAll(".btn")
var div9am = $('#hour-9')
var div10am = $('#hour-10')
var div11am = $('#hour-11')
var div12pm = $('#hour-12')
var div1pm = $('#hour-13')
var div2pm = $('#hour-14')
var div3pm = $('#hour-15')
var div4pm = $('#hour-16')
var div5pm = $('#hour-17')


$("#hour-9 .description").val(localStorage.getItem('hour-9'))


$(function () {
  $(".saveBtn").on("click", function () {

    var userInputt = $(this).siblings('.description').val()
    var time = $(this).parent().attr('id')
    localStorage.setItem(time, userInputt)

  }
  )

  $('.time-block').each(function () {
    var divtime = parseInt($(this).attr('id').split('hour-')[1])
    console.log(divtime)

    if (divtime < currentHour) {
      $(this).addClass('past')
      $(this).removeClass('future')
      $(this).removeClass('present')

    }
    else if (divtime == currentHour) {
      $(this).addClass('present')
      $(this).removeClass('past')
      $(this).removeClass('future')

    }
    else if (divtime > currentHour) {
      $(this).addClass('future')
      $(this).removeClass('past')
      $(this).removeClass('present')
    }

  })


})





  ;
