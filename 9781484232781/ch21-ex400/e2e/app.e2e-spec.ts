import { Ch21Ex400Page } from './app.po';

describe('ch21-ex400 App', () => {
  let page: Ch21Ex400Page;

  beforeEach(() => {
    page = new Ch21Ex400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
