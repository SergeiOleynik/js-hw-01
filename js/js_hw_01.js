/***** variables *****/
let premium = 0,               /**премія**/
    newPremium = 0; 
/***** variables *****/  

/*********** запит вводу числа ***********/
premium = prompt("Введіть розмір вашої зарплати :) :) :)", premium);
premium=Number.parseFloat(premium);  /*********** перетворення строки в цифру ***********/

/****************************************/
if(premium>0){  /***** if begin *****/ 
newPremium = (premium * 0.15);  /***** calculation 15% *****/
newPremium = Number(newPremium.toFixed(2));  
alert(`вам нараховано 15%:   ${newPremium}$`);

premium = newPremium + premium;
premium = Number(premium.toFixed(2));
alert(`загальна сума з урахуванням 15%:   ${premium}$`);

newPremium = premium * 0.1;    /***** calculation 10% *****/
newPremium = Number(newPremium.toFixed(2));
alert(`утримано 10% від всієї суми:   ${newPremium}$`); 

premium = premium - newPremium;
premium = Number(premium.toFixed(2));
alert(`загальна сума з урахуванням 10%:   ${premium}$`); 

premium = premium - 190; 
premium = Number(premium.toFixed(2));
if(premium<0) alert(`ви в мінусі, мабуть треба брати кредіт:   ${premium}$`); 
else alert(`витрати -190:   ${premium}$`);
} /***** if end *****/
else alert("введіть, будь ласка, корректну суму !!!!");
/****************************************/

 
