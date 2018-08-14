/*
    snoot.js
    Form validation sode for snoot.html
    
    Author: Heather Bente
    Date: 6 August 2018
*/

"use strict";

var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();
var formValidity = true;

// function to remove select list defaults
function removeSelectDefaults() {
   // alert("remove select defaults called");
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

// function to set up document fragments for days of the month
function setUpDays() {
    var dates = document.getElementById("delivDy").getElementsByTagName("option");
    twentyNine.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[28].cloneNode(true));
    thirtyOne.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[30].cloneNode(true));
}

// function to inspect custom check box on message change
function autoCheckCustom() {
    var messageBox = document.getElementById("customText");
    // textarea has message, check the box
    if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder) {
        document.getElementById("custom").checked = "checked";
    }
    // textare has no message, uncheck the box
    else {
        document.getElementById("custom").checked = "";
    }
}

// function to copy billing address to delivery address
function copyBillingAddress() {
    var billingInputElements = document.querySelectorAll("#billingAddress input");
    var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
    // duplicate address - checkbox is checked - copy
    if (document.getElementById("sameAddr").checked) {
        for (var i = 0; i < billingInputElements.length; i++) {
            deliveryInputElements[i + 1].value = billingInputElements[i].value;
        }
        document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
        
    }
    // duplicate address - checkbox is not checked - erase
    else {
        for (var i = 0; i < billingInputElements.length; i++) {
            deliveryInputElements[i + 1].value = "";
        }
        document.querySelector("#deliveryAddress select").selectedIndex = -1;
    }
}

// function to validate address - billing and delivery
function validateAddress(fieldsetId) {
    
    var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
    var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;
    try {
        
        // loop thru the input fields looking for blanks
        for (var i = 0; i < elementCount; i++) {
            
            currentElement = inputElements[i];
            // blanks
            if (currentElement.value === "") {
                // debugger;
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            }
            // not blanks
            else {
                currentElement.style.background = "white";
            }
            // validate select list field
            currentElement = document.querySelectorAll("#" + fieldsetId + " select")[0];
            if (currentElement.selectedIndex === -1) {
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }
            else {
                currentElement.style.border = "";
            }
        }
            // action for invalif fieldset
            if (fieldsetValidity === false) {
                if (fieldsetId === "billingAddress") {
                    throw "Please complete all billing address informtation."
                }
                else {
                    throw "Please complete all delivery address informtation."
                }
            }
        else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
        }
    catch(msg) {
        // alert("catch message");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}


// function to validate delivery date
function validateDeliveryDate() {
    // alert("this function successfully was called and ran up until here")
    var selectElements = document.querySelectorAll("#deliveryDate" + " select");
    var errorDiv = document.querySelectorAll("#deliveryDate" + " .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = selectElements.length;
    var currentElement;
    try {
        
        // loop thru the select fields looking for blanks
        for (var i = 0; i < elementCount; i++) {
            
            currentElement = selectElements[i];
            // blanks
            if (currentElement.selectedIndex === -1) {
                // debugger;
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }
            // not blanks
            else {
                currentElement.style.border = "";
            }
            // validate select list field
            currentElement = document.querySelectorAll("#deliveryDate" + " select")[0];
            if (currentElement.selectedIndex === -1) {
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }
            else {
                currentElement.style.border = "";
            }
        }
            // action for invalid fieldset
            if (fieldsetValidity === false) {
                    throw "Please specify a delivery date."
            }
        else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
        }
    catch(msg) {
        // alert("catch message");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

// function to validate payment
function validateDeliveryDate() {
    // alert("this function successfully was called and ran up until here");
    var errorDiv = document.querySelectorAll("#deliveryDate" + " .errorMessage")[0];
    var fieldsetValidity = true;
    var ccNumElement = document.getElementById("ccNum");
    var selectElements = document.querySelectorAll("#paymentInfo" + " select");
    var elementCount = selectElements.length;
    var cvvElement = document.getElementById("cvv");
    var cards = document.getElementsByName("paymentType");
    var currentElement;
    // this is where we were yesterday
    try {
        
        // loop thru the select fields looking for blanks
        for (var i = 0; i < elementCount; i++) {
            
            currentElement = selectElements[i];
            // blanks
            if (currentElement.selectedIndex === -1) {
                // debugger;
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }
            // not blanks
            else {
                currentElement.style.border = "";
            }
            // validate select list field
            currentElement = document.querySelectorAll("#deliveryDate" + " select")[0];
            if (currentElement.selectedIndex === -1) {
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }
            else {
                currentElement.style.border = "";
            }
        }
            // action for invalid fieldset
            if (fieldsetValidity === false) {
                    throw "Please specify a delivery date."
            }
        else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
        }
    catch(msg) {
        // alert("catch message");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}


// function to validate entire form
function validateForm(evt) {
//    alert("submit event");
//    alert("validateForm function was called");
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }
    
    formValidity = true;
    
    validateAddress("billingAddress");
    validateAddress("deliveryAddress");
    validateDeliveryDate();
    
    if (formValidity === true) { // form is valid
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    }
    else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
        document.getElementById("errorText").style.display = "block";
    }
}

// function that sets up page on load event
function setUpPage() {
    removeSelectDefaults();
    setUpDays();
    createEventListeners();
}

// function to create our event listeners
function createEventListeners() {
    var deliveryMonth = document.getElementById("delivMo");
    if (window.addEventListener) {
        deliveryMonth.addEventListener("change", updateDays, false);
    }
    else if (deliveryMonth.attachEvent) {
        deliveryMonth.attachEvent("onchange", updateDays);
    }
     var deliveryYear = document.getElementById("delivYr");
    if (deliveryYear.addEventListener) {
        deliveryYear.addEventListener("change", updateDays, false);
    }
    else if (deliveryYear.attachEvent) {
        deliveryYear.attachEvent("onchange", updateDays);
    }
    var messageBox = document.getElementById("customText");
    if (messageBox.addEventListener) {
        messageBox.addEventListener("change", autoCheckCustom, false);
    }
    else if (messageBox.attachEvent) {
        messageBox.attachEvent("onchange", autoCheckCustom);     
    }
    var same = document.getElementById("sameAddr");
    if (same.addEventListener) {
        same.addEventListener("change", copyBillingAddress, false);
    }
    else if (same.attachEvent) {
        same.attachEvent("onchange", copyBillingAddress);     
    }
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        // console.log("if statement for validate form listener worked");
        form.addEventListener("submit", validateForm, false);
    }
    else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm, false);     
    }
}

// function that sets up list of days based on selected month
function updateDays() {
    var deliveryDay = document.getElementById("delivDy");
    var dates = deliveryDay.getElementsByTagName("option");
    var deliveryMonth = document.getElementById("delivMo");
    var deliveryYear = document.getElementById("delivYr");
    // cover for no month selected
    if (deliveryMonth.selectedIndex === -1) {
        return;
    }
    var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;
    while (dates[28]) {
        deliveryDay.removeChild(dates[28]);
    }
    if (deliveryYear.selectedIndex === -1) {
        deliveryDay.selectedIndex = 0;
    }

// if feb and 2020 twentyNine
if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value === "2020") {
    deliveryDay.appendChild(twentyNine.cloneNode(true));
}

// else if 30 day month thirty
else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11") {
    deliveryDay.appendChild(thirty.cloneNode(true));
}

// else if 31 day month thirtyOne
else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12") {
    deliveryDay.appendChild(thirtyOne.cloneNode(true));
}
}

// else 

// page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}