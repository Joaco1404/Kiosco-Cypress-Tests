const VentasPage = require('../support/pages/VentasPage');

describe('Módulo de Ventas (POM)', () => {
  it('TC-02: Debe agregar productos y calcular el total correctamente', () => {
    VentasPage.visitarVentas();

    // Agregamos 2 Coca Colas
    VentasPage.seleccionarProducto('Coca Cola 1L (2000)');
    VentasPage.ingresarCantidad('2');
    VentasPage.clickAgregarProducto();
    VentasPage.verificarTotal('4000');
    VentasPage.verificarProductoEnLista('Coca Cola 1L (2000) - Cant: 2 - Subtotal: $4000');

    // Agregamos 1 Alfajor
    VentasPage.seleccionarProducto('Alfajor (1000)');
    VentasPage.ingresarCantidad('1');
    VentasPage.clickAgregarProducto();
    VentasPage.verificarTotal('5000');
    VentasPage.verificarProductoEnLista('Alfajor (1000) - Cant: 1 - Subtotal: $1000');
  });
});