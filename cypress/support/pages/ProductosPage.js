class ProductosPage {
    constructor() {
        this.inputNombre = '#P4_NOMBRE';
        this.inputPrecio = '#P4_PRECIO';
        this.inputStock = '#P4_STOCK';
        this.btnGuardar = '#btn-guardar';
        this.tablaProductos = '#tabla-productos tbody';
        this.mensajeError = '#mensaje-error';
        this.mensajeExito = '#mensaje-exito';
    }

    visitarProductos() {
        cy.visit('cypress/fixtures/mock-productos.html');
    }

    llenarFormulario(nombre, precio, stock) {
        if (nombre) cy.get(this.inputNombre).clear().type(nombre);
        if (precio) cy.get(this.inputPrecio).clear().type(precio);
        if (stock) cy.get(this.inputStock).clear().type(stock);
    }

    clickGuardar() {
        cy.get(this.btnGuardar).click();
    }

    verificarProductoEnTabla(nombre) {
        cy.get(this.tablaProductos).should('contain', nombre);
    }

    verificarMensajeError(textoEsperado) {
        cy.get(this.mensajeError).should('be.visible').and('contain', textoEsperado);
    }

    verificarMensajeExito() {
        cy.get(this.mensajeExito).should('be.visible').and('contain', 'guardado correctamente');
    }
}

module.exports = new ProductosPage();