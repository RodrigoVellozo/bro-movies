import { AssertDatePipe } from './assert-date.pipe';

describe('AssertDatePipe', () => {
  it('create an instance', () => {
    const pipe = new AssertDatePipe();
    expect(pipe).toBeTruthy();
  });
});
