import { MaaSMarvelFrontendPage } from './app.po';

describe('maa-s-marvel-frontend App', () => {
  let page: MaaSMarvelFrontendPage;

  beforeEach(() => {
    page = new MaaSMarvelFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
