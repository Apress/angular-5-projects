import { AdvancedEx100Page } from './app.po';

describe('advanced-ex100 App', () => {
  let page: AdvancedEx100Page;

  beforeEach(() => {
    page = new AdvancedEx100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
