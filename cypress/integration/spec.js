describe("Newsk", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("", () => {
    // cy.get('button[name="toggle-menu"]').click();
  });

  it("", () => {
    cy.get('button[name="toggle-search-form"]').click();

    cy.get('input[type="search"]').type("Apple{enter}");
  });
});
