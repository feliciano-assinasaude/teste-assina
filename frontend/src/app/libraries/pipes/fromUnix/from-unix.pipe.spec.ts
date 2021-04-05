import { FromUnixPipe } from './from-unix.pipe';

describe('FromUnixPipe', () => {
  it('create an instance', () => {
    const pipe = new FromUnixPipe();
    expect(pipe).toBeTruthy();
  });
});
