class ComprasPage {
  constructor() {
    this.selectProveedor = '#P15_PROVEEDOR_ID';
    this.inputTotal = '#P15_TOTAL';
    this.selectEstado = '#P15_ESTADO';
    this.btnCrear = '#btn-crear';
    this.mensajeError = '#mensaje-error';
    this.mensajeExito = '#mensaje-exito';
  }

  visitarCompras() {
    cy.visit('cypress/fixtures/mock-compras.html');
  }

  seleccionarProveedor(nombreProveedor) {
    cy.get(this.selectProveedor).select(nombreProveedor);
  }

  ingresarTotal(total) {
    cy.get(this.inputTotal).clear().type(total);
  }

  seleccionarEstado(estado) {
    cy.get(this.selectEstado).select(estado);
  }

  clickCrear() {
    cy.get(this.btnCrear).click();
  }

  verificarMensajeExito() {
    cy.get(this.mensajeExito).should('be.visible').and('contain', 'registrada correctamente');
  }

  verificarMensajeError(textoEsperado) {
    cy.get(this.mensajeError).should('be.visible').and('contain', textoEsperado);
  }
}

module.exports = new ComprasPage();