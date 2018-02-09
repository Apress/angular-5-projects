import { Ch24Ex300Page } from './app.po';

describe('ch24-ex300 App', () => {
  let page: Ch24Ex300Page;

  beforeEach(() => {
    page = new Ch24Ex300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
