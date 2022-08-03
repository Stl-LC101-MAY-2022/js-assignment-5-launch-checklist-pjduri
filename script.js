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
    const launchStatus = this.document.getElementById('launchStatus')
    const missionTarget = this.document.getElementById('missionTarget')
    const statusChecklist = [launchStatus, pilotStatus, copilotStatus, fuelStatus, cargoStatus]

    // console.log('pilot name', pilotName)
    // console.log("testForm", testForm)
    // console.log('formSubmit ', formSubmit)
    // console.log('launch status check ', launchStatusCheck)
    // console.log('faultyItems ', faultyItems)
    // console.log('pilotStatusText', pilotStatus.innerHTML)
    
    formSubmit.addEventListener("click", function (event) {
        event.preventDefault()
        // faultyItems.style.visibility = 'visible'
        formSubmission(document, statusChecklist, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value) 
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling 
   // myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (listedPlanetsResponse) {
       listedPlanets = listedPlanetsResponse;
       //console.log(listedPlanets);
       //console.log(listedPlanetsResponse[1]);
   }).then(function () {
       //console.log(listedPlanets);
       let selection = listedPlanets[3]
       console.log(selection)
       addDestinationInfo(missionTarget, selection.name, selection.diameter, selection.star, 
        selection.distance, selection.moons, selection.image)
       // Below this comment call the appropriate helper functions to 
       // pick a planet fom the list of planets and add that information 
       // to your destination.
   })
   
});