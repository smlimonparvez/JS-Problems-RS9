// Assignment Problem Task 1
function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  let tax = (income - expenses) * 0.2;
  return tax;
}
// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));
// console.log(calculateTax(6000, 15000));
// console.log(calculateTax(0, 0));

// Assignment Problem Task 2
function sendNotification(email) {
  if (typeof email !== "string") {
    return "Please use string as a Input";
  }
  // if (!email.includes("@")) {
  //   return "Invalid Email";
  // }
  const atIndex = email.indexOf("@");
  const lastAtIndex = email.lastIndexOf("@");
  if (
    atIndex === -1 ||
    atIndex !== lastAtIndex ||
    atIndex === 0 ||
    atIndex === email.length - 1
  ) {
    return "Invalid Email Input";
  }
  // const [userName, domain] = email.split("@");
  // const message = `${userName} sent you an email from ${domain}`;
  // return message;
  // Second Method
  const notification = email.split("@");
  const message =
    notification[0] +
    " " +
    "sent you an email from" +
    " " +
    notification[notification.length - 1];
  return message;
}
// console.log(sendNotification('zihad@gmail.com'))
// console.log(sendNotification('farhan34@yahoo.com'))
// console.log(sendNotification('nadim.naem5@outlook.com'))
// console.log(sendNotification('fahim234.hotmail.com'))
// console.log(sendNotification('sadia8icloud.com'))

// Assignment Problem Task 3
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  // const hasDigit = /\d/;
  // return hasDigit.test(name);
  // Second Method
  if (name.match(/\d+/g)) {
    return true;
  }
  return false;
}
// console.log(checkDigitsInName('Raj123'));
// console.log(checkDigitsInName('n9ayeem'));
// console.log(checkDigitsInName('e1mu3'));
// console.log(checkDigitsInName('Suman'));
// console.log(checkDigitsInName('Name2024'));
// console.log(checkDigitsInName('!@#'));
// console.log(checkDigitsInName(["Raj"]));

// Assingment Problem Task 4
function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean" ||
    obj.schoolGrade > 30 ||
    obj.testScore > 50
  ) {
    return "Invalid Input";
  }
  // if(obj.schoolGrade > 30 || obj.testScore > 50){
  //   return 'Input number cross the limit';
  // }
  let score = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily === true) {
    score += 20;
  }
  if (score >= 80) {
    return true;
  }
  return false;
}
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false,
//   })
// );
// console.log(calculateFinalScore("hello"));
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );

// Assingment Problem Task 5
function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let totalTimes = 0;
  for (const time of waitingTimes) {
    totalTimes += time;
  }
  const person = waitingTimes.length;
  const avgTime = Math.round(totalTimes / person);
  const serialBehind = serialNumber - 1;
  const actualSerialBehind = serialBehind - person;
  const timeNeed = actualSerialBehind * avgTime;
  return timeNeed;
}
// console.log(waitingTime([3, 5, 7, 11, 6], 10));
// console.log(waitingTime([13, 2], 6));
// console.log(waitingTime([13, 2, 6, 7, 10], 6));
// console.log(waitingTime([6], 4));
// console.log(waitingTime(7 , 10));
// console.log(waitingTime("[6,2]", 9));
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));
