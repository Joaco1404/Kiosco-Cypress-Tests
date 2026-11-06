const ProveedoresPage = require('../support/pages/ProveedoresPage');

describe('Modulo de Proveedores (POM)', () => {
    it('TC-06: Debe crear un proveedor correctamente', () => {
        ProveedoresPage.visitarProveedores();

        //Llenamos el formulario y guardamos
        ProveedoresPage.llenarFormulario('Distribuidora Test', '30-11111111-1', 'test@test.com');
        ProveedoresPage.clickGuardar();

        //Verificamos éxito y que aparezca en la tabla
        ProveedoresPage.verificarMensajeExito();
        ProveedoresPage.verificarProveedorEnTabla('Distribuidora Test');
    });

    it('TC-07: Debe validar que los campos no estén vacíos', () => {
        ProveedoresPage.visitarProveedores();

        //Email sin @
        ProveedoresPage.llenarFormulario('Proveedor A', '30-33333333-3', 'correo_falso');
        ProveedoresPage.clickGuardar();

        ProveedoresPage.verificarMensajeError('El formato del Email no es válido');
    });

    it('TC-08: Debe validar que no se repita el CUIT', () => {
        ProveedoresPage.visitarProveedores();

        //Creamos el primer proveedor
        ProveedoresPage.llenarFormulario('Proveedor A', '30-33333333-3', 'a@test.com');
        ProveedoresPage.clickGuardar();

        //Intentamos crear el mismo producto de nuevo
        ProveedoresPage.llenarFormulario('Proveedor B', '30-33333333-3', 'b@test.com');
        ProveedoresPage.clickGuardar();

        //Verificamos el error de duplicado
        ProveedoresPage.verificarMensajeError('Este CUIT ya está registrado');
    });
});