import { Exercise8Page } from './app.po';

describe('exercise8 App', function() {
  let page: Exercise8Page;

  beforeEach(() => {
    page = new Exercise8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
