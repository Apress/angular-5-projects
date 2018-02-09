import { Exercise10Page } from './app.po';

describe('exercise10 App', function() {
  let page: Exercise10Page;

  beforeEach(() => {
    page = new Exercise10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
