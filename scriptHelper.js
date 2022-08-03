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
    const emptyCheck = []

    resultsArr.push(pilotResult, copilotResult, fuelLevelResult, cargoLevelResult)
    // for (let i=0; i<resultsArr.length; i++) {
    //     if (resultsArr[i] === 'Empty') {
    //         list[i].innerHTML = `Not ready.`
    //         emptyCheck.push('empty fields')
    //     } else {
    //         emptyCheck.push('ok')
    //     }
    //     if (emptyCheck.length >= resultsArr.length && emptyCheck.includes('empty fields')) {
    //         alert('All fields are required!')
    //         break
    //     }
    // }
    if (pilotResult === 'Is a number' || copilotResult === 'Is a number') {
        alert('Make sure to enter valid information for each field!')
        list[0].innerHTML = `Pilot ${pilot} is not ready for launch.`
        list[1].innerHTML = `Copilot ${copilot} is not ready for launch.`
        launchReady.push('no')
    } else if (pilotResult === 'Not a number' || copilotResult === 'Not a number') {
        list[0].innerHTML = `Pilot ${pilot} is ready for launch.`
        list[1].innerHTML = `Copilot ${copilot} is ready for launch.`
    }
    if (fuelLevelResult === 'Not a number' || cargoLevelResult === 'Not a number') {
        alert('Make sure to enter valid information for each field!')
        launchReady.push('no')
    }
    if (fuelLevel < 10000){
        list[2].innerHTML = 'Fuel level too low for launch'
        launchReady.push('no')
    } else {
        list[2].innerHTML = 'Fuel level high enough for launch'

    } 
    if (cargoLevel > 10000) {
        list[3].innerHTML = 'Cargo mass too heavy for launch'
        launchReady.push('no')
    } else {
        list[3].innerHTML = 'Cargo mass low enough for launch'
    }
    for (let i=0; i<list.length; i++) {
        list[i].style.visibility = 'visible'
    }
    if (launchReady.includes('no')) {
        document.style.color = "rgb(199, 37, 78)"
        document.innerHTML = 'Shuttle not ready for launch.'
    } else {
        document.style.color = "rgb(65, 159, 106)"
        document.innerHTML = 'Shuttle ready for launch.'
    }
    for (let i=0; i<resultsArr.length; i++) {
        if (resultsArr[i] === 'Empty') {
            list[i].innerHTML = `Not ready.`
            emptyCheck.push('empty fields')
        } else {
            emptyCheck.push('ok')
        }
        if (emptyCheck.length >= resultsArr.length && emptyCheck.includes('empty fields')) {
            alert('All fields are required!')
            break
        }
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
    let index = Math.floor(Math.random() * (planets.length))
    console.log(index)
    return planets[index]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;