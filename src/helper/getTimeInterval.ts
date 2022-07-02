export function getTimeInterval(endDate: Date) {
    /** get total seconds between the times */
    let delta = Math.abs(endDate.getTime() - new Date().getTime()) / 1000;

    /** calculate (and subtract) whole days */
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;

    /** calculate (and subtract) whole hours */
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    /** calculate (and subtract) whole minutes */
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    return {
        days,
        hours,
        minutes,
        seconds: Math.floor(delta)
    };
}