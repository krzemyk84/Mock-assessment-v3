var standardRate = 7.80; // regular rate 
var overtimeRate = 12.50; // overtime rate
var overtimeHours = 0; // the hours over 37 hours per week
var overtimePay = 0; // overtime pay
var standardPay = 0; // stadard pay 


start();
function start(hoursWorked) {
  alert("Menu:");
  alert("Option 1: Standard Pay £7.80");
  alert("Option 2: Overtime £12.50 \n");
  hoursWorked = Number(prompt("Please enter the number of hours worked: "));
  // alert(hoursWorked);
  promptHoursWorked(hoursWorked);
    function promptHoursWorked(boop1) {
      hoursWorked = parseInt(hoursWorked);
      // alert("Hours worked " + hoursWorked);
      checkIfMoreThanZero(hoursWorked);
    }

    function checkIfMoreThanZero() {
      // var hoursWorked2 = 66;
      // alert(hoursWorked);
      // alert(typeof hoursWorked);
        if (hoursWorked > 0 && !isNaN(hoursWorked)) { // if the input is greater than 0 and a number
          checkIfOvertime(hoursWorked);  
        }
        else {
          alert("Please enter a correct value \n");
          start();
        }
    }
    
    function checkIfOvertime(totalPay) {
      if (hoursWorked <= 37) { // if number of hours is less or equal to 37 per week
          totalPay = hoursWorked * standardRate;
          totalPay = totalPay.toFixed(2);
          result(totalPay);
        }
        else { // if number of  worked hours is over 37 per week
          standardPay = 37 * standardRate;
          overtimeHours = hoursWorked - 37;
          overtimePay = overtimeHours * overtimeRate;
          totalPay = standardPay + overtimePay;
          totalPay = totalPay.toFixed(2);
          result(totalPay);
        }
    }

    function result(totalPay) {
      alert("You take home £" + totalPay + "\n");
      restart();
    }

    function restart(ifRestart) {
      ifRestart = prompt("Do you want to calculate it again? (y/n) ");
      if (ifRestart == "y") {
        console.clear();
        start();
      }
      if (ifRestart == "n") {
        alert("Thanks and byeeeee!");
        return;
      }
      else {
        alert("Please enter y for yes or n for no. \n");
        restart();
      }
    }
}



  











































// function menu() {
//   alert("Menu:");
//   alert("Option 1: Standard Pay £7.80"); // 1.standard pay
//   alert("Option 2: Overtime £12.50 \n"); // 2.overtime pay
// }

// function promptHoursWorked() {
//   var hoursWorked = Number(prompt("Please enter the number of hours worked: ")); // prompt the user for number of hours worked
//   hoursWorked = parseInt(hoursWorked);
//   return hoursWorked;
//   checkIfMoreThanZero(hoursWorked);
// }

// function checkIfMoreThanZero() {
//   // var hoursWorked2 = 66;
//   alert(hoursWorked);
//   alert(typeof hoursWorked);
//   if (hoursWorked > 0 && !isNaN(hoursWorked)) { // if the input is greater than 0 and a number
//   checkIfOvertime();  
// }
// else {
//   alert("Please enter a correct value");
// }
// }


// function result() {
//   alert("You take home £" + totalPay);
// }

// function checkIfOvertime() {
//   if (hoursWorked <= 37) { // if number of hours is less or equal to 37 per week
//       var totalPay = hoursWorked * standardRate;
//       totalPay = totalPay.toFixed(2);
//       result();
//     }
//     else { // if number of  worked hours is over 37 per week
//       standardPay = 37 * standardRate;
//       overtimeHours = hoursWorked - 37;
//       overtimePay = overtimeHours * overtimeRate;
//       totalPay = standardPay + overtimePay;
//       totalPay = totalPay.toFixed(2);
//       result();
//     }
// }