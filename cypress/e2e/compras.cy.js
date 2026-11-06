const ComprasPage = require('../support/pages/ComprasPage');

describe('Módulo de Compras (POM)', () => {
  
  it('TC-09: Debe registrar una compra pagada correctamente', () => {
    ComprasPage.visitarCompras();
    
    ComprasPage.seleccionarProveedor('Distribuidora Test');
    ComprasPage.ingresarTotal('5000');
    ComprasPage.seleccionarEstado('PAGADO');
    ComprasPage.clickCrear();
    
    ComprasPage.verificarMensajeExito();
  });

  it('TC-10: Debe registrar una compra pendiente correctamente', () => {
    ComprasPage.visitarCompras();
    
    ComprasPage.seleccionarProveedor('Mayorista Test');
    ComprasPage.ingresarTotal('8000');
    ComprasPage.seleccionarEstado('PENDIENTE');
    ComprasPage.clickCrear();
    
    ComprasPage.verificarMensajeExito();
  });

  it('TC-11: Debe validar que se elija un proveedor', () => {
    ComprasPage.visitarCompras();
    
    // Sin proveedor
    ComprasPage.ingresarTotal('1500');
    ComprasPage.seleccionarEstado('PAGADO');
    ComprasPage.clickCrear();
    
    ComprasPage.verificarMensajeError('Debés elegir un proveedor');
  });

  it('TC-12: Debe validar que el total sea mayor a 0', () => {
    ComprasPage.visitarCompras();
    
    ComprasPage.seleccionarProveedor('Distribuidora Test');
    ComprasPage.ingresarTotal('0');
    ComprasPage.seleccionarEstado('PAGADO');
    ComprasPage.clickCrear();
    
    ComprasPage.verificarMensajeError('Ingresá un total mayor a 0');
  });

});