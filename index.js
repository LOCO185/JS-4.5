function leapYear(year) {
    if (( year % 4 === 0 || year % 400 === 0) && !(year % 100===0) ){
        console.log("It is indeed a leap year");
    }
}leapYear(2012)