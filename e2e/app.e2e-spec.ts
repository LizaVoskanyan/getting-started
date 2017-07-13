import { GettingStartedPage } from './app.po';

describe('getting-started App', () => {
  let page: GettingStartedPage;

  beforeEach(() => {
    page = new GettingStartedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
