window.addEventListener("load", function() {

    const formSubmit = this.document.getElementById('formSubmit')
    const pilotName = this.document.querySelector('input[name=pilotName]')
    const copilotName = this.document.querySelector('input[name=copilotName]')
    const fuelLevel = this.document.querySelector('input[name=fuelLevel]')
    const cargoMass = this.document.querySelector('input[name=cargoMass]')
    const pilotStatus = this.document.getElementById('pilotStatus')
    const copilotStatus = this.document.getElementById('copilotStatus')
    const fuelStatus = this.document.getElementById('fuelStatus')
    const cargoStatus = this.document.getElementById('cargoStatus')
    const launchStatus = this.document.getElementById('launchStatus')
    const missionTarget = this.document.getElementById('missionTarget')
    const statusChecklist = [pilotStatus, copilotStatus, fuelStatus, cargoStatus]
    
    formSubmit.addEventListener("click", function (event) {
        event.preventDefault()
        formSubmission(launchStatus, statusChecklist, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value) 
    })

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (listedPlanetsResponse) {
       listedPlanets = listedPlanetsResponse;
   }).then(function () {
       let selection = pickPlanet(listedPlanets)
       console.log(selection)
       addDestinationInfo(missionTarget, selection.name, selection.diameter, selection.star, 
        selection.distance, selection.moons, selection.image)
   })
   
});