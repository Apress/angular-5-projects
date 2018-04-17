import { AdvancedEx300Page } from './app.po';

describe('advanced-ex300 App', () => {
  let page: AdvancedEx300Page;

  beforeEach(() => {
    page = new AdvancedEx300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
