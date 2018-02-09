import { Ch18Ex300Page } from './app.po';

describe('ch18-ex300 App', () => {
  let page: Ch18Ex300Page;

  beforeEach(() => {
    page = new Ch18Ex300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
