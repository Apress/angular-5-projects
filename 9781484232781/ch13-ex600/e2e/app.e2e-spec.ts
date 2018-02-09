import { Exercise9Page } from './app.po';

describe('exercise9 App', function() {
  let page: Exercise9Page;

  beforeEach(() => {
    page = new Exercise9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
