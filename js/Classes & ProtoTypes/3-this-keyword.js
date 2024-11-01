// this keyword ka kaam hota hai current context (matlab jis object ya function ke andar this use ho raha hai) ko point karna. Ye different situations mein alag alag objects ko refer karta hai. 

// Arrow function mein this lexical scope se aata hai, matlab jahan arrow function likha gaya hai wahan ka this use hota hai.

const person = {
  name: 'Ali',
  greet: () => {
    console.log(`Hello, ${this.name}`);
  }
};
person.greet(); //  output : Hello, undefined 



// Object ke method ke andar, this us object ko refer karta hai jisse method call hua.

const person1 = {
  name: 'Ali',
  greet: function () {
    console.log(`Hello, ${this.name}`);
  }
};
person1.greet(); // output : Hello, Ali

// In this example, we define the greet method as a traditional function. Now, when we call obj.greet(), this refers to the object obj, so this.name correctly outputs the value Hello Ali.