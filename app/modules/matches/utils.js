export const getTimeLeft = (startTime) => {
    const startDate = new Date(startTime);
    const now = new Date();
    var difference = startDate.getTime() - now.getTime();

    console.log(now.toLocaleString(), "  - ", startDate.toLocaleString());

    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24

    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60

    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60

    var secondsDifference = Math.floor(difference / 1000);

    let timeString = "";
    if (daysDifference > 1) {
        timeString = `${daysDifference}d ${hoursDifference}h`;
    } else if (hoursDifference > 1) {
        timeString = `${hoursDifference}h ${minutesDifference}m`
    } else {
        timeString = `${minutesDifference}m ${secondsDifference}s`
    }
    const timeLeft = {
        daysDifference,
        hoursDifference,
        minutesDifference,
        secondsDifference,
        timeString
    };


    console.log('difference = ' + daysDifference + ' day/s ' + hoursDifference + ' hour/s ' + minutesDifference + ' minute/s ' + secondsDifference + ' second/s ');
    return timeLeft;
};