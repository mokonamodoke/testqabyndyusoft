describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.ru/');
    cy.get('[id="APjFqb"]').type("Byndyusoft");
    cy.get('[id="APjFqb"]').type('{enter}');
    cy.get('.tF2Cxc > .yuRUbf .LC20lb').parent().invoke('removeAttr', 'target').click();
    cy.origin('https://byndyusoft.com', () => {
            cy.get('.knowMore__text').should('be.visible');
            cy.get('.knowMore__text').scrollIntoView();
            cy.get('.btn--lg').click();
            cy.get('.popup-callback__contacts-tg').should('have.attr', 'href', 'https://t.me/alexanderbyndyu');
          });
      })
})