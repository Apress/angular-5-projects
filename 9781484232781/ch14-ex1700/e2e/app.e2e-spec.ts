import { Ch14Ex700Page } from './app.po';

describe('ch14-ex700 App', function() {
  let page: Ch14Ex700Page;

  beforeEach(() => {
    page = new Ch14Ex700Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
