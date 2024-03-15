// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) { // may need to include document parameter as the first parameter
    // Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { // may need to include document parameter as the first parameter

    //console.logs, delete these when done

    console.log(document);
    console.log(list);
    console.log(pilot);
    console.log(copilot);
    console.log(fuelLevel);
    console.log(cargoLevel);

    //validating no fields are blank

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        return;
        //alert("Please enter a value for each field.");
    }

    //validating names are not numbers, and fuel and cargo levels are numbers

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        console.log(pilot);
        console.log(copilot);
        //alert("Pilot names cannot be numbers.");
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        return;
        //alert("Fuel and cargo levels must be valid numbers.");
    }

    //updating shuttle requirements

    //updating pilotStatus and copilotStatus

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // list.querySelectorAll('ol li').forEach(el => {
    //     if (el.innerHTML === "Pilot Ready") {
    //         el.innerHTML = `Pilot ${pilot} is ready for launch`;
    //     } else if (el.innerHTML === "Co-pilot Ready") {
    //         el.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //     }
    // });

    //Fuel and cargo checks

    if (fuelLevel < 10000 && cargoLevel > 10000) { //checking if fuel level too low AND cargo too heavy
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").setAttribute("style", "color: red");
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        list.setAttribute("style", "visibility: visible");
    } else if (fuelLevel < 10000) { //checking if the fuel level is too low
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        document.getElementById("launchStatus").setAttribute("style", "color: red"); //attribute must be a string
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        list.setAttribute("style", "visibility: visible");
    } else if (cargoLevel > 10000) { //checking if the cargo is too heavy
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").setAttribute("style", "color: red");
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        list.setAttribute("style", "visibility: visible");
    } else { //Fuel and cargo go for launch
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        document.getElementById("launchStatus").setAttribute("style", "color: green");
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        list.setAttribute("style", "visibility: visible");
    }

 }
 
 async function myFetch() {
    let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
 
    return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {};
    // Get random number and get planet with that index
    planet = planets[Math.floor(Math.random() * planets.length)];
    return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;