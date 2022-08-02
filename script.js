//const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function() {

    // these querySelectors work
    const testForm = this.document.querySelector("form")
    const formField = this.document.querySelector("formField")
    const formSubmit = this.document.getElementById('formSubmit')
    const pilotName = this.document.querySelector('input[name=pilotName]')
    const faultyItems = this.document.querySelector('input[name=faultyItems]')
    const copilotName = this.document.querySelector('input[name=copilotName]')
    const fuelLevel = this.document.querySelector('input[name=fuelLevel]')
    const cargoMass = this.document.querySelector('input[name=cargoMass]')
 
    // re-read 23.5
    // get button
    // addEventListener on button
    // add form validation inside button event listener
    console.log('pilot name', pilotName)
    console.log("testForm", testForm)
    console.log('formSubmit ', formSubmit)
    //console.log(formSubmit)
    formSubmit.addEventListener("click", function (event) {
        event.preventDefault()
        console.log(formSubmission(pilotName, copilotName, fuelLevel, cargoMass))
    })

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling 
//    // myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to 
//        // pick a planet fom the list of planets and add that information 
//        // to your destination.
//    })
   
});