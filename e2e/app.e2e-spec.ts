import { TodoWithNgrxPage } from './app.po';

describe('todo-with-ngrx App', () => {
  let page: TodoWithNgrxPage;

  beforeEach(() => {
    page = new TodoWithNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
