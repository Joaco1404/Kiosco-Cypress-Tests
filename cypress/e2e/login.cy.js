const LoginPage = require('../support/pages/LoginPage');

describe('Módulo de Login y Seguridad (POM)', () => {
  it('TC-01: Debe mostrar el panel de control al loguearse', () => {
    LoginPage.visitarLogin();
    LoginPage.escribirUsuario('joaquin');
    LoginPage.escribirPassword('Kiosco2026!');
    LoginPage.clickLogin();
    LoginPage.verificarPanelDeControl();
  });
});