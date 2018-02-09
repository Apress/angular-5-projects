import { A200Page } from './app.po';

describe('a200 App', function() {
  let page: A200Page;

  beforeEach(() => {
    page = new A200Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
