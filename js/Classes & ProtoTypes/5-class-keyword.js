// We can say the class keyword is a blue print for creating objeccts whenver we make object of class it will return us object with attached fucntion and the function would be our cunstructur and whenever i make obj of class the costructor will call automatically and all functions and methods will be go the prototype of that class;


class student {
    constructor(name, age) {
        this.studentName = name;
        this.studentAge = age;
        console.log("this is constructor function");  // jab bhi hum class ko call kernga to contructor function to chlay ga hi chlaga
    }

    hello() {           // class ka prototype
        console.log(`Hello ${this.studentName} you age is ${this.studentAge}`);
    }

    static staticMethod() {     // static method ko class kay saat call kerna padta hay 
        console.log("Hello");
    }
}

let a = new student("Mudhaise", 23);
a.hello();                // Hello Mudhaise you age is 23
student.staticMethod();   // Hello 


// use extends Metbhod in student
class secondStudent extends student { }
const user = new secondStudent("Sentence", 20);
console.log(user);

