// Function to get the name of the day based on the day number
function getDayName(dayNumber){
    let dayName;
    switch(dayName){
        case 0:
            dayName="Sunday";
            break;
        case 1:
            dayName="Monday";
            break;
        case 2:
            dayName="Tuesday";
            break;
        case 3:
            dayName="Wednesday";
            break;
        case 4:
            dayName="Thursday";
            break;
        case 5:
            dayName="Firday";
            break;
        case 6:
            dayName="Saturday";
            break;
        default:
            dayName="Invalid day Number";
    }
    return dayName;
}

// Example usage
console.log(getDayName(1));   // Output: Monday
console.log(getDayName(7));   // Output: Invalid day number
