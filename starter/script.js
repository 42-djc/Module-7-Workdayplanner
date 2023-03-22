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

  $("#9am .description").val(localStorage.getItem("9am"));