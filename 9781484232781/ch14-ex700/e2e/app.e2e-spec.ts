import { Exercise12Page } from './app.po';

describe('exercise12 App', function() {
  let page: Exercise12Page;

  beforeEach(() => {
    page = new Exercise12Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
