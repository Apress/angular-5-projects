import { Ch15Ex100Page } from './app.po';

describe('ch15-ex100 App', function() {
  let page: Ch15Ex100Page;

  beforeEach(() => {
    page = new Ch15Ex100Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
