let   credits = 23580,
      pricePerDroid = 3000;
let   totalPrice = 0;

totalPrice = prompt("вкажіть кількість телевізорів для придбання");

if((totalPrice === NaN)||(totalPrice===false)||
   (totalPrice===undefined)||(totalPrice===null)) alert("Операцію скасовано!");  /* end if */
else{
   totalPrice = Number.parseInt(totalPrice);
   if(!totalPrice) alert("Ви впевнені що нічого не купляєте?")
   else if(totalPrice>7) alert("Недостатньо коштів на рахунку"); 
   else if(totalPrice<0) alert("введіть, будь ласка, корректне число!"); 
   else{     
      if(totalPrice===1){ // case 1:    
         credits = credits - pricePerDroid;
         alert(`Ви купили ${totalPrice} телевізорів, на рахунку залишилось ${credits} кредитів`);         
      } // end case 1  
      else if(totalPrice===2){ // case 2: 
         credits = credits - (pricePerDroid*2);
         alert(`Ви купили ${totalPrice} телевізорів, на рахунку залишилось ${credits} кредитів`);  
      } // end case 2
      else if(totalPrice===3){ // case 3: 
         credits = credits - (pricePerDroid*3);
         alert(`Ви купили ${totalPrice} телевізорів, на рахунку залишилось ${credits} кредитів`);  
      } // end case 3
      else if(totalPrice===4){ // case 4: 
         credits = credits - (pricePerDroid*4);
         alert(`Ви купили ${totalPrice} телевізорів, на рахунку залишилось ${credits} кредитів`);  
      } // end case 4
      else if(totalPrice===5){ // case 5: 
         credits = credits - (pricePerDroid*5);
         alert(`Ви купили ${totalPrice} телевізорів, на рахунку залишилось ${credits} кредитів`);  
      } // end case 5
      else if(totalPrice===6){ // case 6: 
         credits = credits - (pricePerDroid*6);
         alert(`Ви купили ${totalPrice} телевізорів, на рахунку залишилось ${credits} кредитів`);  
      } // end case 6
      else if(totalPrice===7){ // case 7: 
         credits = credits - (pricePerDroid*7);
         alert(`Ви купили ${totalPrice} телевізорів, на рахунку залишилось ${credits} кредитів`);  
      } // end case 7
   } //end else
}

