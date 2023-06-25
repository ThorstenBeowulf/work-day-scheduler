// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  $( ".saveBtn" ).click(function( event ) {

    var parentId = $(this).parent().attr("id");
    console.log(parentId);

    var descriptionText = $(this).siblings(".description").val();
    console.log(descriptionText);

    var myClass = $(this).attr("class");
    console.log(myClass);

    localStorage.setItem(parentId, descriptionText);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // var currentHour = (dayjs().format('H'));
  var currentHour = 12;

  for (let i = 9; i < 18; i++) {
    var thisEl = "hour-" + i;
    console.log(thisEl);
    
    var hourEl = $("div[id*= i]");
    if (currentHour === i ) {
      hourEl.addClass("present").removeClass("past future");
    } else if (currentHour < i) {
      hourEl.addClass("past").removeClass("present future");
    } else {
      hourEl.addClass("future").removeClass("past present");
    }

  }
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('dddd, DD/MM/YYYY')
  $('#currentDay').text(currentDate);
});

