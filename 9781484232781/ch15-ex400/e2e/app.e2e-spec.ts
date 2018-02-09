import { Ch15Ex400Page } from './app.po';

describe('ch15-ex400 App', function() {
  let page: Ch15Ex400Page;

  beforeEach(() => {
    page = new Ch15Ex400Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
