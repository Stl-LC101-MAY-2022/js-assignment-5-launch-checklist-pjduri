// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, 
    distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

   document.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>`
   
}

function validateInput (testInput) {
    if(testInput === '' || testInput == null) {
        return 'Empty'
    } else if(isNaN(Number(testInput))) {
        return 'Not a number'
    } else if(!isNaN(Number(testInput))) {
        return 'Is a number'
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const resultsArr = []
    const pilotResult = validateInput(pilot)
    const copilotResult = validateInput(copilot)
    const fuelLevelResult = validateInput(fuelLevel)
    const cargoLevelResult = validateInput(cargoLevel)
    const launchReady = []

    resultsArr.push(pilotResult, copilotResult, fuelLevelResult, cargoLevelResult)
    for (let i=0; i<resultsArr.length; i++) {
        if (resultsArr[i] === 'Empty') {
            alert('All fields required.')
            break
        }
    }
    if (pilotResult === 'Is a number' || copilotResult === 'Is a number') {
        alert('Pilot and Copilot fields cannot contain numbers.')
        list[1].innerHTML = `Pilot ${pilot} is not ready.`
        list[2].innerHTML = `Copilot ${copilot} is not ready.`
        launchReady.push('no')
    } else if (pilotResult === 'Not a number' || copilotResult === 'Not a number') {
        list[1].innerHTML = `Pilot ${pilot} is ready.`
        list[2].innerHTML = `Copilot ${copilot} is ready.`
    }
    if (fuelLevelResult === 'Not a number' || cargoLevelResult === 'Not a number') {
        alert('Fuel and Cargo Levels must be numbers.')
        launchReady.push('no')
    }
    if (fuelLevel < 10000){
        list[3].innerHTML = `Fuel too low.`
        launchReady.push('no')
    } else {
        list[3].innerHTML = 'Fuel high enough for takeoff.'

    } 
    if (cargoLevel > 10000) {
        list[4].innerHTML = 'Too much mass for takeoff.'
        launchReady.push('no')
    } else {
        list[4].innerHTML = 'Cargo mass low enough for takeoff.'
    }
    for (let i=0; i<list.length; i++) {
        list[i].style.visibility = 'visible'
    }
    if (launchReady.includes('no')) {
        list[0].style.color = 'red'
        list[0].innerHTML = 'Shuttle not ready for launch.'
    } else {
        list[0].style.color = 'green'
        list[0].innerHTML = 'Shuttle ready for launch.'
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
    });

    return planetsReturned;
    
}

function pickPlanet(planets) {
    planets = myFetch()
    return planets
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;