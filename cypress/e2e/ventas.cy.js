describe('Módulo de Ventas (Mocking)', () => {
  
  it('TC-02: Debe agregar productos y calcular el total correctamente', () => {
    cy.visit('cypress/fixtures/mock-ventas.html');

    // Agregamos 2 Coca Colas (Precio: 2000)
    cy.get('#P7_PRODUCTO').select('Coca Cola 1L (2000)');
    cy.get('#P7_CANTIDAD').type('2');
    cy.get('#btn-agregar').click();
    
    // Verificamos que el total sea 4000
    cy.get('#P7_TOTAL_VENTA').should('have.text', '4000');
    cy.contains('Coca Cola 1L (2000) - Cant: 2 - Subtotal: $4000').should('be.visible');

    // Agregamos 1 Alfajor (Precio: 1000)
    cy.get('#P7_PRODUCTO').select('Alfajor (1000)');
    cy.get('#P7_CANTIDAD').type('1');
    cy.get('#btn-agregar').click();
    
    // Verificamos que el total acumulado sea 5000
    cy.get('#P7_TOTAL_VENTA').should('have.text', '5000');
    cy.contains('Alfajor (1000) - Cant: 1 - Subtotal: $1000').should('be.visible');

    // Verificamos que el mensaje de error NO se muestre
    cy.get('#mensaje-error').should('not.be.visible');
  });

});