var today = dayjs()
// showing the current date time. 
$('#currentDay').text(today.format('MMM D,YYYY, h:mm:ss'))
//format the current time with the 24 hour clock.
var currentHour = parseInt(today.format('H'))

var saveButton = document.querySelectorAll(".btn")
// using Jquery to grab the elemnts ID.
var div9am = $('#hour-9')
var div10am = $('#hour-10')
var div11am = $('#hour-11')
var div12pm = $('#hour-12')
var div1pm = $('#hour-13')
var div2pm = $('#hour-14')
var div3pm = $('#hour-15')
var div4pm = $('#hour-16')
var div5pm = $('#hour-17')

// this is getting the vallue that the uses sets for each container 
$("#hour-9 .description").val(localStorage.getItem('hour-9'))
$("#hour-10 .description").val(localStorage.getItem('hour-10'))
$("#hour-11 .description").val(localStorage.getItem('hour-11'))
$("#hour-12.description").val(localStorage.getItem('hour-12'))
$("#hour-13 .description").val(localStorage.getItem('hour-13'))
$("#hour-14 .description").val(localStorage.getItem('hour-14'))
$("#hour-15 .description").val(localStorage.getItem('hour-15'))
$("#hour-16 .description").val(localStorage.getItem('hour-16'))
$("#hour-17 .description").val(localStorage.getItem('hour-17'))

$(function () {
  //event listnerer on click run this function
  $(".saveBtn").on("click", function () {
// on click find this sibling with the class of description and the vaule
    var userInput = $(this).siblings('.description').val()
    //When click find this parents attibute. In this case its ID. 
    var time = $(this).parent().attr('id')
    // now we are setting theses Items into local storage.
    localStorage.setItem(time, userInput)
    console.log($(this).parent().attr('id'))
    console.log($(this).siblings('.description').val())
  }
  )

  $('.time-block').each(function () {
 // This block of code removes hour- and will only be seen as the numbers.
    var divtime = parseInt($(this).attr('id').split('hour-')[1])
    console.log(divtime)
    // with hour- removed we can now compare the current hour to the id number. 
    // We are using 24 hour clock to compair the numbers. 
    
   // if the container time is less the current time add the past class 
    if (divtime < currentHour) {
      $(this).addClass('past')
      $(this).removeClass('future')
      $(this).removeClass('present')

    }
    // if the container time is is equal to current time add the present class to the container.
    // 
    else if (divtime === currentHour) {
      $(this).addClass('present')
      $(this).removeClass('past')
      $(this).removeClass('future')

    }
    // if the container time is greater then the current time add futer class.  
    else if (divtime > currentHour) {
      $(this).addClass('future')
      $(this).removeClass('past')
      $(this).removeClass('present')
    }

  })


})





  ;
