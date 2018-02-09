import { Ch16Ex300Page } from './app.po';

describe('ch16-ex300 App', () => {
  let page: Ch16Ex300Page;

  beforeEach(() => {
    page = new Ch16Ex300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
