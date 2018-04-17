import { AdvancedEx200Page } from './app.po';

describe('advanced-ex200 App', () => {
  let page: AdvancedEx200Page;

  beforeEach(() => {
    page = new AdvancedEx200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
