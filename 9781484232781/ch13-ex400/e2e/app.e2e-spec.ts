import { Exercise7Page } from './app.po';

describe('exercise7 App', function() {
  let page: Exercise7Page;

  beforeEach(() => {
    page = new Exercise7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
