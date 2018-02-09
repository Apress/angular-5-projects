import { Ch25Ex100Page } from './app.po';

describe('ch25-ex100 App', () => {
  let page: Ch25Ex100Page;

  beforeEach(() => {
    page = new Ch25Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
