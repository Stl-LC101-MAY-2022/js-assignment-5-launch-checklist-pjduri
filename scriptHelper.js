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

function validateInput (testInput) {
    // const messages = []
    // if(testInput === '' || testInput === null) {
    //     messages.push('Empty')
    // } else if(isNaN(testInput)) {
    //     messages.push('Not a number')
    // } else if(!isNaN(testInput)) {
    //     messages.push('Is a number')
    // }
    // return messages
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

    list.style.visibility = 'visible'
    resultsArr.push(pilotResult, copilotResult, fuelLevelResult, cargoLevelResult)
    for (let i=0; i<resultsArr.length; i++) {
        if (resultsArr[i] === 'Empty') {
            alert('All fields required.')
        }
    }
    if (pilotResult === 'Is a number' || copilotResult === 'Is a number') {
        alert('Pilot and Copilot fields cannot contain numbers.')
    }
    if (fuelLevelResult === 'Not a number' || cargoLevelResult === 'Not a number') {
        alert('Fuel and Cargo Levels must be numbers.')
    }
    console.log('IT LIIIIVES!!!')


    // const testArr = [pilot, copilot, fuelLevel, cargoLevel]
    // for (let i=0; i<3; i++) {
    //     if (validateInput(testArr[i]) === 'Empty') {
    //         alert('All fields required')
    //     }
    // }

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