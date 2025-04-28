`
 ## Ada Lovelace Day

Ada Lovelace Day, celebrating Ada, Countess of Lovelace as the first computer programmer, 
is traditionally celebrated on the second Tuesday of October each year.

Write a function that takes a year in the Gregorian calendar as an integer 
and returns the day of October on which Ada Lovelace Day falls, also as an integer. 
For example, give 2018 you should return 9 (since the 9th of October is 
the second Tuesday in October of 2018).

Your function does not have to account for non-gregorian calendars or null years.
 `
const untilSecondTuesday: any = {
    '0': 10,
    '1': 9,
    '2': 8,
    '3': 14,
    '4': 13,
    '5': 12,
    '6': 11,
}

export const getAdaDay = (year: number): number => {
    const firstOct = new Date(year, 9, 1);
    const dayOfWeek = firstOct.getDay().toString();
    return untilSecondTuesday[dayOfWeek];
}

