import { Exercise4Page } from './app.po';

describe('exercise4 App', function() {
  let page: Exercise4Page;

  beforeEach(() => {
    page = new Exercise4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
