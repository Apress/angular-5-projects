import { Ch24Ex100Page } from './app.po';

describe('ch24-ex100 App', () => {
  let page: Ch24Ex100Page;

  beforeEach(() => {
    page = new Ch24Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
