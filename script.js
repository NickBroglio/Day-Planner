let currentTime = $("#currentDay").text(moment().format("MMM DD, YYYY"));
let rightNow = parseInt(moment().format('HH'));


$("textarea").each(function(){
    let time = parseInt($(this).attr("time"));
    if(time < rightNow){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if(time === rightNow){
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
});