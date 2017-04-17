import { A2utestingPage } from './app.po';

describe('a2utesting App', () => {
  let page: A2utestingPage;

  beforeEach(() => {
    page = new A2utestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
