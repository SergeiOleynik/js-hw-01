let total = 0,
    tempPrompt = 0,
    countIteration = 0;

while(true){   
    countIteration++;
    tempPrompt = prompt("введіть число");
    if((tempPrompt === NaN)||(tempPrompt===false)||(tempPrompt===undefined)||(tempPrompt===null)){
        alert("Операцію скасовано!"); 
        break;
    }
    tempPrompt = Number.parseFloat(tempPrompt);
    tempPrompt = Number(tempPrompt.toFixed(2)); 
    alert(`Ви ввели число ${tempPrompt} + загальна сума ${total} = ${total = tempPrompt + total}
           кількість введень:  ${countIteration}`);       
}
