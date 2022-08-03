//const { formSubmission } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function() {

    // these querySelectors work
    const testForm = this.document.querySelector("form")
    const formField = this.document.querySelector("formField")
    const formSubmit = this.document.getElementById('formSubmit')
    const pilotName = this.document.querySelector('input[name=pilotName]')
    const faultyItems = this.document.getElementById('faultyItems')
    const copilotName = this.document.querySelector('input[name=copilotName]')
    const fuelLevel = this.document.querySelector('input[name=fuelLevel]')
    const cargoMass = this.document.querySelector('input[name=cargoMass]')
    const launchStatusCheck = this.document.getElementById('launchStatusCheck')
    const pilotStatus = this.document.getElementById('pilotStatus')
    const copilotStatus = this.document.getElementById('copilotStatus')
    const fuelStatus = this.document.getElementById('fuelStatus')
    const cargoStatus = this.document.getElementById('cargoStatus')

    console.log('pilot name', pilotName)
    console.log("testForm", testForm)
    console.log('formSubmit ', formSubmit)
    console.log('launch status check ', launchStatusCheck)
    console.log('faultyItems ', faultyItems)
    
    formSubmit.addEventListener("click", function (event) {
        event.preventDefault()
        // faultyItems.style.visibility = 'visible'
        formSubmission(window.document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value) 
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