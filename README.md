# week4hw

Please excuse the lack of change logs because I am still learning how to work with git commits

The contents of the repo contain a pw generator. 

Originally, I thought of using the char set from https://net-comber.com/charset.html
The functions added were 
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
  }
this funtion worked for all char but i was unable to concatenate the results in a truly random way. 
This route contemplated adding each character in a concat but meant that the first chars would be lowercase, next uppercase, symbols, numbers.. Not fully random.

After meeting with tutor, a new route was taken that uses arrays for each char type. 
the file enclosed is the final design that actually generates a random pw and has validations for responses to prompts. 
