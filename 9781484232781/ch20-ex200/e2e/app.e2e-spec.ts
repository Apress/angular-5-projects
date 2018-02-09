import { Ch20Ex200Page } from './app.po';

describe('ch20-ex200 App', () => {
  let page: Ch20Ex200Page;

  beforeEach(() => {
    page = new Ch20Ex200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
