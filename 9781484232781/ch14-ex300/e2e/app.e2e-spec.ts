import { Exercise1Page } from './app.po';

describe('exercise1 App', function() {
  let page: Exercise1Page;

  beforeEach(() => {
    page = new Exercise1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
