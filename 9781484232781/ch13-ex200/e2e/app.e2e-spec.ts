import { Exercise5Page } from './app.po';

describe('exercise5 App', function() {
  let page: Exercise5Page;

  beforeEach(() => {
    page = new Exercise5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
