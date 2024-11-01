function multiplayBy2(num) {
    return num * 2;
}

multiplayBy2.stored = "kyle";
console.log(multiplayBy2(10));  // 20, we calling the function not access the property stored;
console.log(multiplayBy2.stored); // 'Kyle', we accessing the property here;

// It will return us fucntion with attached a obj with the property stored; 