import { Ch22Ex100Page } from './app.po';

describe('ch22-ex100 App', () => {
  let page: Ch22Ex100Page;

  beforeEach(() => {
    page = new Ch22Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
