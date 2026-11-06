const ProductosPage = require('../support/pages/ProductosPage');

describe('Modulo de Productos (POM)', () => {
    it('TC-03: Debe crear un producto correctamente', () => {
        ProductosPage.visitarProductos();

        //Llenamos el formulario y guardamos
        ProductosPage.llenarFormulario('Coca Cola 1L', '2500', '50');
        ProductosPage.clickGuardar();

        //Verificamos éxito y que aparezca en la tabla
        ProductosPage.verificarMensajeExito();
        ProductosPage.verificarProductoEnTabla('Coca Cola 1L');
    });

    it('TC-04: Debe validar que los campos no estén vacíos', () => {
        ProductosPage.visitarProductos();

        //Dejamos todo vacío y guardamos
        ProductosPage.clickGuardar();

        //Verificamos el mensaje de error
        ProductosPage.verificarMensajeError('El nombre, precio y stock son obligatorios');
    });

    it('TC-05: Debe validar que no se repiten nombres de productos', () => {
        ProductosPage.visitarProductos();

        //Creamos el primer producto
        ProductosPage.llenarFormulario('Alfajor', '1000', '20');
        ProductosPage.clickGuardar();

        //Intentamos crear el mismo producto de nuevo
        ProductosPage.llenarFormulario('Alfajor', '1200', '30');
        ProductosPage.clickGuardar();

        //Verificamos el error de duplicado
        ProductosPage.verificarMensajeError('El producto ya existe');
    })
})