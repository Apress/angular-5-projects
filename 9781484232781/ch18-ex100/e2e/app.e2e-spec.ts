import { Ch18Ex100Page } from './app.po';

describe('ch18-ex100 App', () => {
  let page: Ch18Ex100Page;

  beforeEach(() => {
    page = new Ch18Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
