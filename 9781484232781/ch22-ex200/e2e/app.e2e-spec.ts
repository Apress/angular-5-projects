import { Ch22Ex200Page } from './app.po';

describe('ch22-ex200 App', () => {
  let page: Ch22Ex200Page;

  beforeEach(() => {
    page = new Ch22Ex200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
