describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verificar que las gráficas sean visibles en el dashbord princiapal", () => {
    cy.contains("Registro de ventas").should("be.visible");
    cy.contains("Últimas ventas").should("be.visible");
    cy.contains("Venta por Ubicación").should("be.visible");
    cy.contains("Productos Destacados").should("be.visible");
  });
});

describe("Navegacion entre pestañas", () => {
  it("Verificar que vaya a la pagina especiica cuando se le de click", () => {
    cy.visit("/");
    cy.contains("Productos Destacados").click();
    cy.url().should("include", "/producto_destacado");

    cy.visit("/");
    cy.contains("Últimas Ventas").click();
    cy.url().should("include", "/ultimas_ventas");

    cy.visit("/");
    cy.contains("Registro de Ventas").click();
    cy.url().should("include", "/registro_ventas");

    cy.visit("/");
    cy.contains("Ventas por Ubicación").click();
    cy.url().should("include", "/ventas_ubicacion");
  });
});
