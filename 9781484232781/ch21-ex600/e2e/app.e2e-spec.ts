import { Ch21Ex600Page } from './app.po';

describe('ch21-ex600 App', () => {
  let page: Ch21Ex600Page;

  beforeEach(() => {
    page = new Ch21Ex600Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
