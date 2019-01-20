const numDays31 = [...Array(32).keys()];
numDays31.shift(); //remove 0 from beginning

//days for June
var daysinJune = Array.from(numDays31);
daysinJune.pop();
for (i = 0; i < 20; i++) {
    daysinJune.shift();
}

//days for July
var daysInJuly = Array.from(numDays31);

//beginning of August
var daysinAugust = Array.from(numDays31);
for (i = 0; i < 13; i++) {
    daysinAugust.pop();
}

//days for December
var daysInSeptemberDisney = Array.from(numDays31);
for (i = 0; i < 19; i++) {
    daysInSeptemberDisney.shift();
}

const disneyDeluxeBlackoutDates = {
    1: [1, 2, 3, 4, 5], //January
    2: [16, 17], //February
    3: [16, 23, 30], //March
    4: [6, 13, 19, 20, 27], //April
    5: [4, 11, 18, 25, 26], //May
    6: [1, 7, 8, 9, 14, 15, 16].concat(daysinJune), //June
    7: daysInJuly, //July
    8: daysinAugust.concat(24, 31), //August
    9: [1], //September
    10: [5, 12, 19, 26], //October
    11: [28, 29, 30], //November
    12: [7, 14, 15].concat(daysInSeptemberDisney)
}

const californiaDeluxeBlackoutDates = {
    1: [1, 2, 3, 4, 5], //January
    2: [16, 17], //February
    3: [16, 23, 30], //March
    4: [6, 13, 19, 20, 27], //April
    5: [4, 11, 18, 25, 26], //May
    6: [], //June
    7: [], //July
    8: [31], //August
    9: [1], //September
    10: [0], //October
    11: [28, 29, 30], //November
    12: [7, 14, 15].concat(daysInSeptemberDisney)
}

var today = new Date();
var todaysDate = today.getDate();
var month = today.getMonth() + 1; //January is 1!

// var todaysDate = 31;
// var month = 8;


function getText() {
    // check if today is blackout date for both parks
    //Disneyland
    var result = {
        text: undefined,
        text2: undefined
    };
    if (checkBlackout(disneyDeluxeBlackoutDates, "disneyland")) {
        result.text = "Disneyland is not available today."
    } else {
        result.text = "Disneyland is available today."
    }

    //California Adventure
    if (checkBlackout(californiaDeluxeBlackoutDates, "californiaAdventure")) {
        result.text2 = "California adventure is not available today."
    } else {
        result.text2 = "California adventure is available today."
    }
    return result;
}

function checkBlackout(parkBlackoutDates, park) {
    if (parkBlackoutDates[month].includes(todaysDate)) {
        return true
    } else {
        return false
    }
}

module.exports.getText = getText;