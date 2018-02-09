import { Exercise11Page } from './app.po';

describe('exercise11 App', function() {
  let page: Exercise11Page;

  beforeEach(() => {
    page = new Exercise11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
