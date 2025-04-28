
import { getAdaDay } from './ada.day';

describe('takes a year in the Gregorian calendar as an integer and returns the day of October on which Ada Lovelace Day falls', () => {
    it('should be return the day in october for the year got into', () => {
        expect(getAdaDay(1943)).toEqual(12);
        expect(getAdaDay(2011)).toEqual(11);//6 Saturday
        expect(getAdaDay(2012)).toEqual(9);//1 Monday
        expect(getAdaDay(2013)).toEqual(8);//2 Tuesday
        expect(getAdaDay(2014)).toEqual(14);//3 Wednesday
        expect(getAdaDay(2015)).toEqual(13);//4 Thursday
        expect(getAdaDay(2016)).toEqual(11);//6 Saturday
        expect(getAdaDay(2017)).toEqual(10);//0 Sunday
        expect(getAdaDay(2018)).toEqual(9);//1 Monday
        expect(getAdaDay(2019)).toEqual(8);//2 Tuesday
        expect(getAdaDay(2020)).toEqual(13);//4 thursday
        expect(getAdaDay(2021)).toEqual(12);//5 friday
        expect(getAdaDay(2022)).toEqual(11);//6 Saturday
        expect(getAdaDay(2023)).toEqual(10);//0 Sunday
        expect(getAdaDay(2024)).toEqual(8);//2 Tuesday
        expect(getAdaDay(2025)).toEqual(14);//3 Wednesday
    });
});