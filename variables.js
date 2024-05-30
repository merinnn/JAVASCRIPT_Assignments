// Using let
function letExample(){
    let x=10;
    if(true){
        let x=20;
        console.log("Inside if block :",x); // Output: Inside if block
    }
    console.log("Outside if block:",x);    // Output: Outsiide if block
}
letExample();

// Using var
function varExample(){
    var y=10;
    if(true){
        var y=20;
        console.log("Inside if block: ",y);    // Output: Inside if block
    }
    console.log("Outside if block: ",y);      //  Output: Outside if block
}
varExample();

// Using const
function constExample(){
    const Z = 10;
    // z=20;  // This will cause an error because you can't reassign
    console.log("Value of z:", z);   // Output: Value of z: 10
    //z = z+1;
}
constExample();
console.log(z);
