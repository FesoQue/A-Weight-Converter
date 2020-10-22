//selectors

const weightInput = document.getElementById('lbsInput');
const result = document.getElementById('output');
const lbsToGrams = document.getElementById('gramsOutput');
const lbsTKilograms = document.getElementById('kgOutput');
const lbsToOunces = document.getElementById('ozOutput');

result.style.visibility = 'hidden';

//event Listeners
weightInput.addEventListener('input', weightOutput);



//functions
function weightOutput(e){
 result.style.visibility = 'visible';

 let pounds = e.target.value;
   //grams output
  lbsToGrams.innerText = pounds/0.0022046;
   //kg output
  lbsTKilograms.innerText = pounds/2.2046;
   //ounce output
  lbsToOunces.innerText = pounds*16;
}




































