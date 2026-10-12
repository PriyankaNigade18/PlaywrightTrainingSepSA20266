/*
-Using switch case we can handle multiple conditions
-Performance wise switch case is better than ladderIf/nestedIf

break
--------
- break is applicable for switch and loop
- break will exit the control from switch and loop body/scope

key === value

syntax
=======
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

//traffic signal

console.log("Program started....");

let color="Red".toLowerCase();

switch (color) {
    case "green":
        console.log("GO");
         break;
    case "red":
        console.log("STOP");
         break;
    case "yellow":
        console.log("READY");
         break;

    default:
        console.log("Color Error!");
        
      }

      console.log("Program ends....");

      console.log("-------------------");

      
let browserName="Msedge".toUpperCase();

switch(browserName)
{
          
    case "CHROME":
        console.log("Test case is executing on Chrome!");
        break;
    case "MSEDGE":
        console.log("Test case is executing on MsEdge!");
        break;
    case "FIREFOX":
        console.log("Test case is executing on Firefox!");
        break;
 
    default:
    console.log("Wrong Browser");
    break;

}

