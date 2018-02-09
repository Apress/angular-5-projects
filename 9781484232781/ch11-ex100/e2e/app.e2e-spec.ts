import { Ch11Ex100Page } from './app.po';

describe('ch11-ex100 App', () => {
  let page: Ch11Ex100Page;

  beforeEach(() => {
    page = new Ch11Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
