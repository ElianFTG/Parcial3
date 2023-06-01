import {cambio, verificacion} from "./sumador.js";

describe("Cambio", () => {
  it("deberia restar el Monto Venta con el efectivo", () => {
    expect(cambio(3, 2)).toEqual(1);
  });
  it("deberia devolverme el cambio cuando el efectivo es mayor al precio", () => {
    expect(cambio(2, 3)).toEqual(1);
  });
  it("deberia retornar false si es que el Monto-Venta esta vacio", () => {
    expect(verificacion("", 3)).toEqual(false);
  });
  /*it("deberia retornar false si es que el Efectivo esta vacio", () => {
    expect(verificacion(2, "")).toEqual(false);
  });
  it("deberia retornar false si es que el Monto-Venta y Efectivo estan vacios", () => {
    expect(verificacion("", "")).toEqual(false);
  });
  /*it("deberia retornar true si es que el Monto-Venta y Efectivo no estan vacios", () => {
    expect(verificacion(2, 3)).toEqual(true);
  });/*
});
