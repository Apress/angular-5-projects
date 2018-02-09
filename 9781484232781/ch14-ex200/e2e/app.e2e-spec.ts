import { A1000Page } from './app.po';

describe('a1000 App', function() {
  let page: A1000Page;

  beforeEach(() => {
    page = new A1000Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
