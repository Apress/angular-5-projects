import { Ch14Ex200Page } from './app.po';

describe('ch14-ex200 App', function() {
  let page: Ch14Ex200Page;

  beforeEach(() => {
    page = new Ch14Ex200Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
