import { FullstackPage } from './app.po';

describe('fullstack App', () => {
  let page: FullstackPage;

  beforeEach(() => {
    page = new FullstackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
