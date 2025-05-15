


  // ****************************************************
  let birthYear=prompt("what year were you born?");
 let birthMonth=prompt("What month were you born-enter 2 digit number");
let birthday=prompt("What day were you born -enter 2 digit number")
 
let birthYear21 = parseInt(birthYear) + 21;
let yes21 = "Hurrah you can Come! You are 21!";
let not21 = "Sorry you are not 21";
if (birthYear21< 2025) {
  document.getElementById("age").innerHTML=yes21;
}else if (birthYear==2025 &&birthMonth<05 && birthdate<=14){
  document.getElementById("age").innerHTML=yes21;
  }else{
    document.getElementById("age").innerHTML=not21;
  }
   
