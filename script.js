//Variables for textarea fields
var nineInput = $("#input-9AM");
var tenInput = $("#input-10AM");
var elevenInput = $("#input-11AM");
var twelveInput = $("#input-12PM");
var oneInput = $("#input-1PM");
var twoInput = $("#input-2PM");
var threeInput = $("#input-3PM");
var fourInput = $("#input-4PM");

// Variable for saving buttons
var saveBtn = $(".saveBtn");

// TODO: variables for Moment functions
var now = moment();
var currentDay = $("#currentDay");
var CurrentHour = now.format("HH");
// var past = 
// var present =
// var future = 

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


// Poulates textarea fields with any events saved in local storage when page loads
function displayCalendarEvents() {
    
    if (localStorage.getItem("calendarEvents") !== null) {
        calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
        nineInput.val(calendarEvents.nineInput);
        tenInput.val(calendarEvents.tenInput);
        elevenInput.val(calendarEvents.elevenInput);
        twelveInput.val(calendarEvents.twelveInput);
        oneInput.val(calendarEvents.oneInput);
        twoInput.val(calendarEvents.twoInput);
        threeInput.val(calendarEvents.threeInput);
        fourInput.val(calendarEvents.fourInput);
    }
}

displayCalendarEvents();

// TODO: Add moment functionality
function addDateAndTime() {
    currentDay.text(now.format("MMMM DD, YYYY hh:mm"));
    var fakeHour = $
    
    $("input").each(function() {

        


    })

    
    //     if () {
    //     console.log("hurray");
    // }

    //if data.hour is < currentHour then = future?
    //if data.hour is = currentHour then = present
    //if data.hour is < currentHour then = past

}

addDateAndTime();

// Event listener for click on image class
saveBtn.on("click", function(event) {
    event.preventDefault();
    var siblingInput = ($(this).siblings("input")[0]); //Grabbing the sibling input of whatever button is pressed
    saveEventData(siblingInput);
})


// Saves new input in textareas as JSON string
function saveEventData(siblingInput) { 
    var eventTime = siblingInput.id.split("-")[1];
    
    if (eventTime === "9AM") {
        calendarEvents.nineInput = siblingInput.value;
    } else if (eventTime === "10AM") {
        calendarEvents.tenInput = siblingInput.value;
    } else if (eventTime === "11AM") {
        calendarEvents.elevenInput = siblingInput.value;
    } else if (eventTime === "12PM") {
        calendarEvents.twelveInput = siblingInput.value;
    } else if (eventTime === "1PM") {
        calendarEvents.oneInput = siblingInput.value;
    } else if (eventTime === "2PM") {
        calendarEvents.twoInput = siblingInput.value;
    } else if (eventTime === "3PM") {
        calendarEvents.threeInput = siblingInput.value;
    } else
         calendarEvents.fourInput = siblingInput.value;
   
    // Saves updated calendarEvents back to local storage
    localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));

}
    



