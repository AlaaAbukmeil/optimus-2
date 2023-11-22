function getMonthName(monthNumber: any) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString("en-US", {
    month: "long",
  });
}

function getDay() {
  var num = new Date().getDay();

  if (num == 1) {
    return "Monday";
  } else if (num == 2) {
    return "Tuesday";
  } else if (num == 3) {
    return "Wednesday";
  } else if (num == 4) {
    return "Thursday";
  } else if (num == 5) {
    return "Friday";
  } else if (num == 6) {
    return "Saturday";
  } else if (num == 0) {
    return "Sunday";
  }
}

export function getTitleDate() {
  var monthNum = new Date().getMonth();

  var month = getMonthName(monthNum);
  const year = new Date().getFullYear();

  var day = new Date().getDate()

  return day + " " + month + " " + year + ", " + getDay() + ".";
}
