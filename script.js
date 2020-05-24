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

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      const target = document.getElementById("missionTarget");
      target.innerHTML = "";
      num = Math.floor(Math.random() * 6); 
      response.json().then( function(json) {
         target.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[num].name}</li>
            <li>Diameter: ${json[num].diameter}</li>
            <li>Star: ${json[num].star}</li>
            <li>Distance from Earth: ${json[num].distance}</li>
            <li>Number of Moons: ${json[num].moons}</li>
         </ol>
         <img src="${json[0].image}">
         `
      });
   });

   form.addEventListener("submit", function(event) {
     let inPilot = document.querySelector("input[name=pilotName]");
     let inCopilot = document.querySelector("input[name=copilotName]");
     let inFuel = document.querySelector("input[name=fuelLevel]");
     let inMass = document.querySelector("input[name=cargoMass]");

     let inputs = [inPilot.value, inCopilot.value, inFuel.value, inMass.value];
     let messages = [];
     let count = 0;

     for (input of inputs){

         if (input === ""){
            if (!messages.includes("All fields required!")){
               messages.push("All fields required!");
            }
         }else{

            if ((count === 0 || count == 1) && !isNaN(Number(input))){
               if (!messages.includes("Pilot and Copilot names must not be a number!")){
                  messages.push("Pilot and Copilot names must not be a number!");
               }
           }

           if ((count === 2 || count === 3) && isNaN(Number(input))){
               if (!messages.includes("Fuel and Mass levels must be numbers!")){
                  messages.push("Fuel and Mass levels must be numbers!");
               }
            }
         }
         count += 1;
     }

     if (messages.length >= 1){
        alert(messages.join(", "));
        event.preventDefault();
     }else{

      let fuelStatus = "";
      let massStatus = "";

      let launchStatus = document.getElementById("launchStatus");

      let twoIsReady = 0;

      if (inFuel.value < 10000){
         fuelStatus += "Fuel level too low for launch!";
         }else{
         fuelStatus += "Fuel level high enough for launch";
         twoIsReady += 1;
      }

      if (inMass.value > 10000){
         massStatus += "Cargo mass too high for launch";

         }else{
         massStatus += "Cargo mass low enough for launch";
         twoIsReady += 1;
      }

      let status = document.getElementById("faultyItems");
      status.style.visibility = 'visible';
         status.innerHTML = `
            <ol>
            <li id="pilotStatus">${inPilot.value} Ready</li>
            <li id="copilotStatus">${inCopilot.value} Ready</li>
            <li id="fuelStatus">${fuelStatus}</li>
            <li id="cargoStatus">${massStatus}</li>
            </ol>
         `;

      if (twoIsReady === 2){
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = 'green';
      }else{
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = 'red';
      }

      event.preventDefault();
      
      }

   })
   
})
