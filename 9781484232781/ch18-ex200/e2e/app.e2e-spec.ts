import { Ch18Ex200Page } from './app.po';

describe('ch18-ex200 App', () => {
  let page: Ch18Ex200Page;

  beforeEach(() => {
    page = new Ch18Ex200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
