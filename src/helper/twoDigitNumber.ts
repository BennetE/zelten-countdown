export function twoDigitNumber(number): string {
    return number < 10 ? "0" + number : "" + number;
}