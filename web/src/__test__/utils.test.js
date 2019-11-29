import { dateDiff, getDateDiffText } from '../utils';

describe('Util 메소드 테스트', () => {
  describe('dateDiffToCurrent 메소드 테스트', () => {
    test('현재에서 현재까지의 차이', () => {
      const fromDate = new Date();
      const toDate = new Date();

      const { type, diff } = dateDiff(fromDate, toDate);

      expect(type).toEqual('s');
      expect(diff).toEqual(0);
    });

    test('1분 미만의 차이', () => {
      const fromDate = new Date('2019-01-01T01:01:00');
      const toDate = new Date('2019-01-01T01:01:59');

      const { type, diff } = dateDiff(fromDate, toDate);

      expect(type).toEqual('s');
      expect(diff).toEqual(59); // 59초 차이
    });

    test('1시간 미만의 차이', () => {
      const fromDate = new Date('2019-01-01T01:00:00');
      const toDate = new Date('2019-01-01T01:59:59');

      const { type, diff } = dateDiff(fromDate, toDate);

      expect(type).toEqual('m');
      expect(diff).toEqual(59); // 59분 차이
    });

    test('1일 미만의 차이', () => {
      const fromDate = new Date('2019-01-01T00:00:00');
      const toDate = new Date('2019-01-01T23:59:59');

      const { type, diff } = dateDiff(fromDate, toDate);

      expect(type).toEqual('h');
      expect(diff).toEqual(23); // 23시간 차이
    });

    test('1주 미만의 차이', () => {
      const fromDate = new Date('2019-01-01T00:00:00');
      const toDate = new Date('2019-01-07T23:59:59');

      const { type, diff } = dateDiff(fromDate, toDate);

      expect(type).toEqual('d');
      expect(diff).toEqual(6); // 6일 차이
    });

    test('1주 이상의 차이', () => {
      const fromDate = new Date('2019-01-01T00:00:00');
      const toDate = new Date('2019-01-28T23:59:59');

      const { type, diff } = dateDiff(fromDate, toDate);

      expect(type).toEqual('w');
      expect(diff).toEqual(3); // 3주 차이
    });
  });

  describe('getDateDiffText 메소드 테스트', () => {
    test('현재에서 현재까지의 차이', () => {
      const fromDate = new Date();
      const toDate = new Date();

      const result = getDateDiffText(fromDate, toDate);

      expect(result).toEqual('0초 전');
    });

    test('1분 미만의 차이', () => {
      const fromDate = new Date('2019-01-01T01:01:00');
      const toDate = new Date('2019-01-01T01:01:59');

      const result = getDateDiffText(fromDate, toDate);

      expect(result).toEqual('59초 전');
    });

    test('1시간 미만의 차이', () => {
      const fromDate = new Date('2019-01-01T01:00:00');
      const toDate = new Date('2019-01-01T01:59:59');

      const result = getDateDiffText(fromDate, toDate);

      expect(result).toEqual('59분 전');
    });

    test('1일 미만의 차이', () => {
      const fromDate = new Date('2019-01-01T00:00:00');
      const toDate = new Date('2019-01-01T23:59:59');

      const result = getDateDiffText(fromDate, toDate);

      expect(result).toEqual('23시간 전');
    });

    test('1주 미만의 차이', () => {
      const fromDate = new Date('2019-01-01T00:00:00');
      const toDate = new Date('2019-01-07T23:59:59');

      const result = getDateDiffText(fromDate, toDate);

      expect(result).toEqual('6일 전');
    });

    test('1주 이상의 차이', () => {
      const fromDate = new Date('2019-01-01T00:00:00');
      const toDate = new Date('2019-01-28T23:59:59');

      const result = getDateDiffText(fromDate, toDate);

      expect(result).toEqual('3주 전');
    });
  });
});
