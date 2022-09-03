let weekDays = ["Monday","Tuesday","Wednsday","Thuresday","Friday"];
weekDays.map(printDay);

function printDay(day){
    console.log(day);
}

// You can use arrow function like below
weekDays.map((day) => console.log(day));
