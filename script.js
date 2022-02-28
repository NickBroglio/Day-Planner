// displays the current time
$("#currentDay").text(moment().format("MMM DD, YYYY"));
// once the save button is clicked the function executes the value of the user input and the time is stored in local storage
$(".saveBtn").on("click", function () {
    let input = $(this).siblings(".text").val();
    let timeText = $(this).parent().attr("id");
    localStorage.setItem(timeText, input);
});
// this function executes the time of day and the color of the time area
function timeColor() {
    // the current hour is stored in this variable
    let hour = moment().hours();
    // for each time area this function will be called 
    $(".time-area").each(function () {
        // this variable gets the id of the parent element of makes an integer
        let time = parseInt($(this).attr("id").split("-")[1]);
        // these if statements determine the current time compare it the time area
        if (time < hour) {
            $(this).addClass("past");
        }
        else if (time === hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
timeColor();
// this updates the time in an interval
let interval = setInterval(timeColor, 10000);
// this gets the data from local storage
$("#hour-8 .text").val(localStorage.getItem("hour-8"));
$("#hour-9 .text").val(localStorage.getItem("hour-9"));
$("#hour-10 .text").val(localStorage.getItem("hour-10"));
$("#hour-11 .text").val(localStorage.getItem("hour-11"));
$("#hour-12 .text").val(localStorage.getItem("hour-12"));
$("#hour-13 .text").val(localStorage.getItem("hour-13"));
$("#hour-14 .text").val(localStorage.getItem("hour-14"));
$("#hour-15 .text").val(localStorage.getItem("hour-15"));

