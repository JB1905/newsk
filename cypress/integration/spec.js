describe('Newsk', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to categories and go to next pagination page', () => {
    cy.get('button[name="toggle-menu"]').click();

    cy.get('a[href="categories"]').click();

    cy.url().should('include', '/categories');

    // pagination
  });

  it('should navigate to publishers', () => {
    cy.get('button[name="toggle-menu"]').click();

    cy.get('a[href="publishers"]').click();

    cy.url().should('include', '/publishers');
  });

  it('should search for query: Apple', () => {
    cy.get('button[name="open-search-form"]').click();

    cy.get('input[type="search"]').type('Apple{enter}');
  });

  // it('should add source to favorites', () => {

  // })

  // it('should change appearance to dark', () => {

  // })

  // beforeEach(() => {
  //   cy.visit(
  //     '/'
  // , {
  //   onBeforeLoad(win) {
  //     cy.stub(win, 'matchMedia')
  //       .withArgs('(prefers-color-scheme: dark)')
  //       .returns({
  //         matches: true,
  //       });
  //   },
  // }
  // );
  // });
});
