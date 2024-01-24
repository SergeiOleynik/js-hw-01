const   ADMIN_PASSWORD = 'jqueryismyjam';
let     message = 0;

message = prompt("введіть пароль");

if(message === ADMIN_PASSWORD) alert("Ласкаво просимо!");
else if((message === NaN) || (message===false) || (message===undefined) || (message===null)) alert("Операцію скасовано!");
else alert("Доступ заборонено, невірний пароль!");


