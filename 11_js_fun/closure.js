function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  

  function outer(){
    let username='sanjay'
    function inner(){
        console.log("inner",username);
    }
    inner()

  }
//   console.log(username);
outer()
// console.log("outer",username);