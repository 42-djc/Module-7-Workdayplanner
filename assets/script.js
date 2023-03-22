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

  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));