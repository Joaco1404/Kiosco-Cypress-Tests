class LoginPage {
  constructor() {
    this.usernameInput = '#P9999_USERNAME';
    this.passwordInput = '#P9999_PASSWORD';
    this.loginButton = '#btn-login';
  }

  visitarLogin() {
    cy.visit('cypress/fixtures/mock-login.html');
  }

  escribirUsuario(usuario) {
    cy.get(this.usernameInput).type(usuario);
  }

  escribirPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  verificarPanelDeControl() {
    cy.contains('Panel de Control').should('be.visible');
    cy.contains('Ventas del mes').should('be.visible');
  }
}

module.exports = new LoginPage();