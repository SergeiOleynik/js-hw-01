let   total = 100,
      ordered = 20;

/* case 1: */
if(ordered<=total) console.log("Замовлення оформлено");
else console.log("На складі недостатня кількість товару!");

/* case 2: */
ordered = 100;
if(ordered<=total) console.log("Замовлення оформлено");
else console.log("На складі недостатня кількість товару!");

/* case 3: */
ordered = 101;
if(ordered<=total) console.log("Замовлення оформлено");
else console.log("На складі недостатня кількість товару!");