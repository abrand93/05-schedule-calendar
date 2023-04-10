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



$(function () {
$(".saveBtn").on("click", function(){

  var userInputt = $(this).siblings('.description').val()
  var time = $(this).parent().attr('id')
 localStorage.setItem(time, userInputt)

}
)
 
$('.time-block').each(function(){
var divtime = parseInt($(this).attr('id').split('hour-')[1])
console.log(divtime)

if(divtime < currentHour){
$(this).addClass('past')
$(this).removeClass('future')
$(this).removeClass('present')

}
else if(divtime == currentHour){
  $(this).addClass('present')
  $(this).removeClass('past')
  $(this).removeClass('future')

}
else if (divtime > currentHour){
  $(this).addClass('future')
  $(this).removeClass('past')
  $(this).removeClass('present')
}

})


})




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
;
