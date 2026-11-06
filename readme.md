# 🧪 Kiosco - E2E Automated Tests (Cypress)

Proyecto de automatización de pruebas End-to-End (E2E) para el sistema de Punto de Venta "Kiosco", desarrollado con **Cypress** y **JavaScript**.

## 🎯 Suites de Pruebas Implementadas
*   `login.cy.js`: Valida la seguridad y autenticación (acceso denegado y exitoso).
*   `ventas.cy.js`: Valida el carrito de compras, cálculo de subtotales y totales.
*   `productos.cy.js`: Valida la creación, duplicados y campos obligatorios de productos.
*   `proveedores.cy.js`: Valida la creación, formato de Email y CUIT duplicado.
*   `compras.cy.js`: Valida el registro de compras pagadas/pendientes y campos obligatorios.

## 🧠 Técnicas QA Aplicadas
*   **Mocking y Fixtures**: Debido a las políticas de seguridad (WAF) del entorno Cloud de Oracle APEX que bloquean herramientas de automatización, se implementó el uso de *Fixtures* (archivos HTML locales) para simular la interfaz y probar la lógica del front-end de forma aislada, segura y rápida.
*   **Aserciones Dinámicas**: Uso de `should('have.text')` y `contains()` para validar cálculos matemáticos en tiempo real y elementos del DOM.
*   **Variables de Entorno**: Uso de `cypress.env.json` para el manejo seguro de credenciales (excluido del repositorio mediante `.gitignore`).

## 🚀 Cómo ejecutar las pruebas
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`
3. Abrir la interfaz de Cypress: `npx cypress open`
4. Seleccionar y ejecutar los tests disponibles.

## 🏗️ Arquitectura del Proyecto
Se implementó el patrón de diseño **Page Object Model (POM)** para garantizar la mantenibilidad y escalabilidad de las pruebas.
*   `cypress/support/pages/`: Contiene las clases con los selectores y acciones de cada página (`LoginPage.js`, `VentasPage.js`).
*   `cypress/e2e/`: Contiene los archivos de prueba que consumen los Page Objects, manteniendo los tests limpios y legibles.