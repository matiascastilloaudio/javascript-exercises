const leapYears = function (year) {
    if (typeof year == "number" && Number.isInteger(year)) {
        if (year % 4 == 0) {
            if (year % 100 == 0 && year % 400 !== 0) {
                return false;
            } else if (year % 100 == 0 && year % 400 == 0) {
                return true;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
};

leapYears(1200);

// Do not edit below this line
module.exports = leapYears;
