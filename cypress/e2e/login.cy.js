describe('Módulo de Login y Seguridad (Mocking con archivo local)', () => {
  
  it('TC-01: Debe mostrar el panel de control al loguearse', () => {
    // 1. Visitamos el archivo HTML local que creamos
    cy.visit('cypress/fixtures/mock-login.html');
    
    // 2. Escribimos los datos
    cy.get('#P9999_USERNAME').type('joaquin');
    cy.get('#P9999_PASSWORD').type('Kiosco2026!');
    
    // 3. Hacemos clic en el botón
    cy.get('#btn-login').click();
    
    // 4. Verificamos que el panel apareció
    cy.contains('Panel de Control').should('be.visible');
    cy.contains('Ventas del mes').should('be.visible');
  });

});