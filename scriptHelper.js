// Write your helper functions here!
require('isomorphic-fetch');

// const form = this.document.getElementById('testForm')
// const button = this.document.getElementById('formSubmit')
// const messages = []
// const pilotName = this.document.getElementById('pilotName')
// const copilotName = this.document.getElementById('copilotName')
// const fuelLevel = this.document.getElementById('fuelLevel')
// const cargoMass = this.document.getElementById('cargoMass')
// const faultyItems = this.document.getElementById('faultyItems')

function addDestinationInfo(document, name, diameter, star, 
    distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

const validateInput = (testInput) => {
    const inputReturns = []
    if(testInput === '' || testInput == null) {
        inputReturns.push('Empty')
    }
    if(isNaN(testInput)) {
        inputReturns.push('Not a number')
    } else if(!isNaN(testInput)) {
        inputReturns.push('Is a number')
    }
    return inputReturns
}

// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
   const testArr = [pilot, copilot, fuelLevel, cargoLevel]
   for (i=0; i<testArr.length; i++) {
    if (validateInput(testArr[i]) === 'Empty') {
        alert('All fields required')
    }
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

// module.exports = {
//     addDestinationInfo: addDestinationInfo,
//     validateInput: validateInput,
//     formSubmission: formSubmission,
//     pickPlanet: pickPlanet,
//     myFetch: myFetch
// }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;