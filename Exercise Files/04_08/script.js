const MYCONSTANT = 5;
console.log(MYCONSTANT);

// Scope

function logScope() {
    var localVar = 2;

    if (localVar) {
        var localVar = "Im different!";
        console.log("nested LocalVar: ", localVar);
    }


    console.log("logScope localVar: ", localVar);
}

logScope(); // logs "im different" for both local and global localVar

function logScopeTwo() {
  let localVariable = 2;

  if (localVariable) {
    let localVariable = "Im different!";
    console.log("nested LocalVariable: ", localVariable);
  }

  console.log("logScope localVariable: ", localVariable);
}

logScopeTwo();