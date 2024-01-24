const   china = "китай",     
        chile = "чилі",
        australia = "австралія",
        india = "індія",
        jamaica = "ямайка";
let     stringForPrompt = "";

stringForPrompt = prompt("вкажіть країну, з якої буде доставка");

if((stringForPrompt === NaN)||(stringForPrompt===false)||
   (stringForPrompt===undefined)||(stringForPrompt===null)) alert("Операцію скасовано!");
else{
    stringForPrompt = stringForPrompt.toLocaleLowerCase();  //перетворення всіх літер в нижній регістер
    switch(stringForPrompt){
        case china:     alert(`Доставка з Китай буде коштувати 100 кредитів.`); break;
        case chile:     alert(`Доставка з Чилі буде коштувати 250 кредитів.`); break;
        case australia: alert(`Доставка з Австралія буде коштувати 170 кредитів.`); break;
        case india:     alert(`Доставка з Індія буде коштувати 80 кредитів.`); break;
        case jamaica:   alert(`Доставка з Ямайка буде коштувати 120 кредитів.`); break;
        default:        alert("в Вашій країні доставка не доступна"); break;
    }
}
