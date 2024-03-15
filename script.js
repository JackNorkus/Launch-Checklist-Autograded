// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (listedPlanets) {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let d = document;
        destinationName = pickPlanet(listedPlanets).name;
        destinationDiameter = pickPlanet(listedPlanets).diameter;
        destinationStar = pickPlanet(listedPlanets).star;
        destinationDistance = pickPlanet(listedPlanets).distance;
        destinationMoons = pickPlanet(listedPlanets).moons;
        destinationImageUrl = pickPlanet(listedPlanets).image;
        addDestinationInfo(d, destinationName, destinationDiameter, destinationStar, destinationDistance, destinationMoons, destinationImageUrl);
    });

    // add event listener for button
    let button = document.getElementById("formSubmit");
    button.addEventListener("click", function() {
        event.preventDefault();

        let d = document;

        list = document.getElementById("faultyItems");

        let pilotName = document.querySelector("input[name=pilotName]");
        pilot = pilotName.value;

        let copilotName = document.querySelector("input[name=copilotName]");
        copilot = copilotName.value;

        let fuelLevelName = document.querySelector("input[name=fuelLevel]");
        fuelLevel = fuelLevelName.value;

        let cargoMassName = document.querySelector("input[name=cargoMass]");
        cargoMass = cargoMassName.value;

        formSubmission(d, list, pilot, copilot, fuelLevel, cargoMass);
    });

 });