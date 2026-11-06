class ProveedoresPage {
    constructor() {
        this.inputNombre = '#P3_NOMBRE';
        this.inputCuit = '#P3_CUIT';
        this.inputEmail= '#P3_EMAIL';
        this.btnGuardar = '#btn-guardar';
        this.tablaProveedores = '#tabla-proveedores tbody';
        this.mensajeError = '#mensaje-error';
        this.mensajeExito = '#mensaje-exito';
    }

    visitarProveedores() {
        cy.visit('cypress/fixtures/mock-proveedores.html');
    }

    llenarFormulario(nombre, cuit, email) {
        if (nombre) cy.get(this.inputNombre).clear().type(nombre);
        if (cuit) cy.get(this.inputCuit).clear().type(cuit);
        if (email) cy.get(this.inputEmail).clear().type(email);
    }

    clickGuardar() {
        cy.get(this.btnGuardar).click();
    }

    verificarProveedorEnTabla(nombre) {
        cy.get(this.tablaProveedores).should('contain', nombre);
    }

    verificarMensajeError(textoEsperado) {
        cy.get(this.mensajeError).should('be.visible').and('contain', textoEsperado);
    }

    verificarMensajeExito() {
        cy.get(this.mensajeExito).should('be.visible').and('contain', 'guardado correctamente');
    }
}

module.exports = new ProveedoresPage();