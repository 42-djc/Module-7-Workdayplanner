// add current date to header

var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

 // ave button click event listener
 $(".saveBtn").on("click", function() {
    
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    console.log(localStorage);
  });

  // Function to loop over time blocks, compare hour vs current hour and add CSS classes
  function colourCode() {
    let currentHour = moment().hour();
    console.log(currentHour);
  
    $(".time-block").each(function () {
      let timeblockHour = parseInt($(this).attr("id"));
  
      if (timeblockHour > currentHour) {
        $(this).addClass("future");
      } else if (timeblockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    });
  }
  

  colourCode();

// code that pulls localstorage values into the description
// Retrieve text content of textareas from localStorage as a loop instead
$(".time-block .description").each(function () {
  var id = $(this).parent().attr("id");
  $(this).val(localStorage.getItem(id));
});