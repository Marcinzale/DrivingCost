// const a = nanValue || 0;

btnCalculate.addEventListener('click', e =>{
    // const a = nanValue || 0;
  let FuelCost = parseFloat(document.getElementById("FuelCost").value.replace(",", "."));
  let AvgCons = parseFloat(document.getElementById("AvgCons").value.replace(",", "."));
  let RouteLenght = parseFloat(document.getElementById("RouteLength").value.replace(",", "."));
  
  result = parseFloat((FuelCost * AvgCons) / 100) * RouteLenght;

  if (Number.isNaN(result) || result === null) {
    alert("Use digits only!");
    }
    else {
      document.getElementById("Result").innerHTML = (result.toFixed(2) + " PLN");  
    }
});

function emptyInput() {
  if(document.querySelectorAll("input").value==="") { 
      document.getElementById('btnCalculate').disabled = true; 
  } else { 
      document.getElementById('btnCalculate').disabled = false;
      }
};

document.getElementById("clear").onclick = () => {
    document.getElementById('myform').reset();
    document.getElementById("Result").innerHTML = "";
    document.getElementById('btnCalculate').disabled = true;
    result.reset();  
};
