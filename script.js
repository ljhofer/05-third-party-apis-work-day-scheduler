
// Variables for lefthand time slots
// var nineAM = $("#9Am");
// var tenAM = $("#10Am");
// var elevenAM = $("#11Am");
// var twelvePM = $("#12Pm");
// var onePM = $("#1Pm");
// var twoPM = $("#2Pm");
// var threePM = $("#3Pm");
// var fourPM = $("#4Pm");

//Variables for text fields
var nineInput = $("#input-9AM");
var tenInput = $("#input10AM");
var elevenInput = $("#input11AM");
var twelveInput = $("#input12PM");
var oneInput = $("#input1PM");
var twoInput = $("#input2PM");
var threeInput = $("#input3PM");
var fourInput = $("#input4PM");

// Variable for right hand image class
var saveBtn = $(".saveBtn");

// Variable for local storage functions

var calendarEvents = {
    nineInput: nineInput.val(), 
    tenInput: tenInput.val(), 
    elevenInput: elevenInput.val(),
    twelveInput: twelveInput.val(), 
    oneInput: oneInput.val(), 
    twoInput: twoInput.val(), 
    threeInput: threeInput.val(), 
    fourInput: fourInput.val(),
}

// TODO:Add function for populated calendarEvents from local storage


// Event listener for click on image class
saveBtn.on("click", function(event) {
    event.preventDefault();
    var siblingInput = ($(this).siblings("input")[0]); //Grabbing the sibling input of whatever button is pressed
    console.log(this);
    console.log(siblingInput);
    saveEventData(siblingInput);
    
})


// Save imput fields as JSON string
function saveEventData(siblingInput) { 
    var eventTime = siblingInput.id.split("-")[1];

    // TODO: Based on eventTime update a property of calendarEvents
    localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
    // renderEventData();
}



// Display JSON string back in planner
// function renderEventData () {
//     console.log("Render function running");
// }

//Keep the date current

//Change the colors