function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { //O(n)
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a;
}

funChallenge(someInput); //O(1)

//Big O : O(4n + 3)
// minified : O(n)