import { Ch15Ex350Page } from './app.po';

describe('ch15-ex350 App', function() {
  let page: Ch15Ex350Page;

  beforeEach(() => {
    page = new Ch15Ex350Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
