
const  obj = {
    studentName : "kyle",
    age : 44,
    }

    console.log(obj.designation);

    // it will doesn't find designation then will go the prototype and still he unable to find;

    const obj2 = {
        studentName : "kyle",
        age : 44,
    }

    obj2.__proto = {  // we insert the designation property in the prototype of obj2;
        designation : "Devloper",
    };

    console.log(obj2.designation); // he will be able to give us answer the of designation;

    function userCreator(name,score){
        const newUser = Object.create(userFunctionStore);
        newUser.name = name;
        newUser.score = score;
        return newUser;
    };

    const userFunctionStore = {
        increment : function(){this.score++},
        login : function(){console.log("Logged in");}
    };

    const user1 = userCreator("will",3);
    const user2 = userCreator("Tim",5);
    user1.increment(); // he will be able to give us answer the of increment;


