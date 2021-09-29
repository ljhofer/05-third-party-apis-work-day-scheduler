

//Variables for text fields
var nineInput = $("#input-9AM");
var tenInput = $("#input-10AM");
var elevenInput = $("#input-11AM");
var twelveInput = $("#input-12PM");
var oneInput = $("#input-1PM");
var twoInput = $("#input-2PM");
var threeInput = $("#input-3PM");
var fourInput = $("#input-4PM");

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
    saveEventData(siblingInput);
})


// Save imput fields as JSON string
function saveEventData(siblingInput) { 
    var eventTime = siblingInput.id.split("-")[1];
    
    // TODO: 
    //Figure out which has hour has new text eventTime
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
   

    //Update the global variable with that new text
    //Push calendarEvents back to local storage
    localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));

}
    

//Add moment functionality

