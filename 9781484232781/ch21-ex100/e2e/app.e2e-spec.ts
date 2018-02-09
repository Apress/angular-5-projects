import { Ch21Ex100Page } from './app.po';

describe('ch21-ex100 App', () => {
  let page: Ch21Ex100Page;

  beforeEach(() => {
    page = new Ch21Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
