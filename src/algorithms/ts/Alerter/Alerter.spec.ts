import { alerter } from './Alerter';

describe('array flatten with recursive method', () => {
    it('check flatten data array', () => {
      // expect(alerter([1,2,100,2,2],3,1.5)).toBeTruthy();
      // expect(alerter([1,2,4,2,2],3,2)).toBeFalsy();
      expect(alerter([1,2,100,2,2],3,2.5)).toBeTruthy();
    });
  });