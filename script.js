// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     let inPilot = document.querySelector("input[name=pilotName]");
     let inCopilot = document.querySelector("input[name=copilotName]");
     let inFuel = document.querySelector("input[name=fuelLevel]");
     let inMass = document.querySelector("input[name=cargoMass]");

     if (inPilot.value === "" || inCopilot.value === "" || inFuel.value === "" || inMass.value === "" || isNaN(Number(inFuel.value)) || isNaN(Number(inMass.value)))  {
         alert("All fields are required!  Fuel and Mass levels should be entered as numbers!");
         // stop the form submission
         event.preventDefault();
     }
   });
});