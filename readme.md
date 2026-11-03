# 🧪 Kiosco - E2E Automated Tests (Cypress)

Proyecto de automatización de pruebas End-to-End (E2E) para el sistema de Punto de Venta "Kiosco", desarrollado con **Cypress** y **JavaScript**.

## 🎯 Objetivo
Automatizar la validación de los flujos críticos de la aplicación, garantizando que la interfaz de usuario responda correctamente antes de cada despliegue.

## 🛠️ Tecnologías Utilizadas
*   **Cypress**: Framework de automatización E2E.
*   **JavaScript**: Lenguaje de programación de los scripts.
*   **Node.js**: Entorno de ejecución.

## 🧠 Técnicas QA Aplicadas
*   **Mocking y Fixtures**: Debido a las políticas de seguridad (WAF) del entorno Cloud de Oracle APEX que bloquean herramientas de automatización, se implementó el uso de *Fixtures* (archivos HTML locales) para simular la interfaz y probar la lógica del front-end de forma aislada y segura.
*   **Variables de Entorno**: Uso de `cypress.env.json` para el manejo seguro de credenciales (excluido del repositorio mediante `.gitignore`).

## 🚀 Cómo ejecutar las pruebas
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`
3. Abrir la interfaz de Cypress: `npx cypress open`
4. Seleccionar el test `login.cy.js` y ejecutarlo.