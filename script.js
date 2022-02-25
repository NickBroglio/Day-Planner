let currentDayEL = $("#current-day")

function displayTime(){
    let rightNow = moment().format("MMM DD, YYYY");
    currentDayEL.text(rightNow);
    
};
console.log(rightNow)
displayTime();


// if block is past current date display block as red
// if(rightNow < )
// if block is current date display block as blue

// if block is not past current date display black as green