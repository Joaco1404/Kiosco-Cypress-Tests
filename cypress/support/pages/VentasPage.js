class VentasPage {
  constructor() {
    this.productoSelect = '#P7_PRODUCTO';
    this.cantidadInput = '#P7_CANTIDAD';
    this.agregarBtn = '#btn-agregar';
    this.totalVenta = '#P7_TOTAL_VENTA';
  }

  visitarVentas() {
    cy.visit('cypress/fixtures/mock-ventas.html');
  }

  seleccionarProducto(nombreProducto) {
    cy.get(this.productoSelect).select(nombreProducto);
  }

  ingresarCantidad(cantidad) {
    cy.get(this.cantidadInput).clear().type(cantidad);
  }

  clickAgregarProducto() {
    cy.get(this.agregarBtn).click();
  }

  verificarTotal(totalEsperado) {
    // ¡Acá está el fix del have-text!
    cy.get(this.totalVenta).should('have.text', totalEsperado);
  }

  verificarProductoEnLista(textoProducto) {
    cy.contains(textoProducto).should('be.visible');
  }
}

module.exports = new VentasPage();