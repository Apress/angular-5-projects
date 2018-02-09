import { Ch14Ex400Page } from './app.po';

describe('ch14-ex400 App', function() {
  let page: Ch14Ex400Page;

  beforeEach(() => {
    page = new Ch14Ex400Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
