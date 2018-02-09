import { Ch21Ex300Page } from './app.po';

describe('ch21-ex300 App', () => {
  let page: Ch21Ex300Page;

  beforeEach(() => {
    page = new Ch21Ex300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
