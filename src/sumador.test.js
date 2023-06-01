import sumar from "./sumador.js";

describe("Cambio", () => {
  it("deberia restar el Monto Venta con el efectivo", () => {
    expect(sumar(3, 2)).toEqual(1);
  });
});
