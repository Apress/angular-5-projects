import { Ch16Ex200Page } from './app.po';

describe('ch16-ex200 App', () => {
  let page: Ch16Ex200Page;

  beforeEach(() => {
    page = new Ch16Ex200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
