import { Exercise6Page } from './app.po';

describe('exercise6 App', function() {
  let page: Exercise6Page;

  beforeEach(() => {
    page = new Exercise6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
