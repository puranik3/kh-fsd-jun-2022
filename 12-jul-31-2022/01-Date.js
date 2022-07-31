// Jan -> 0, Dec -> 11
const independenceDay = new Date( 1776, 6, 4, 12, 30, 50, 500 );
console.log( independenceDay ); // GMT

let today = new Date(); // right now
console.log( today );

console.log( independenceDay.getDate() );

// Sun -> 0, ..., Sat -> 6
const days = [
    'Sunday', // 0
    'Monday', // 1
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday' // 6
]
console.log( independenceDay.getDay() ); // 0 - 6
console.log( days[independenceDay.getDay()] );
console.log( today.getDay() );

today.setDate( 32 );
console.log( today );

todayPlus100 = new Date();
todayPlus100.setDate( todayPlus100.getDate() + 100 );
console.log( todayPlus100 );