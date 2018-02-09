import { Ch16Ex100Page } from './app.po';

describe('ch16-ex100 App', () => {
  let page: Ch16Ex100Page;

  beforeEach(() => {
    page = new Ch16Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
