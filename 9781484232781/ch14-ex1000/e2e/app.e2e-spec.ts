import { Exercise13Page } from './app.po';

describe('exercise13 App', function() {
  let page: Exercise13Page;

  beforeEach(() => {
    page = new Exercise13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
