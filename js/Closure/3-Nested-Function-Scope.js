// I called the outer function and when he run he will se counter then move on towards inner function (second function then we incrementing the counter first it will increment the counter and store it in ur own identifire after that i exicuting the incrementCounter() and it will make new exicution context and there is two faces 1. code exicution face 2. local memory(function execution context) it wlll find counter first in ur own local memory and could not find then it will go to outer local memory and he found it there then he will increment it and return us as output. )

function outer() {
   let count = 0;

   function incrementCounter() {
      count++;
   }

   incrementCounter();

}

outer();

