import { ventasInicialesNegocio } from "./datos.js";
import { registrarVentasNegocio, calcularTotalDia } from "./operaciones.js";

registrarVentasNegocio(ventasInicialesNegocio, "Mouse inalambrico tipo gamer", 1, 80000);
registrarVentasNegocio(ventasInicialesNegocio, "Audifonos inalambricos tipo gamer", 1, 250000);

console.log("------ REPORTE DE CIERRE DEL DIA ------\n");

console.log("Historial de ventas:\n");
for (const venta of ventasInicialesNegocio) {
    console.log(`- ${venta.articulo}: ${venta.cantidad} x ${venta.precioUnitario} pesos colombianos`);
}

const total = calcularTotalDia(ventasInicialesNegocio);
console.log(`\nTotal recaudado durante todo el dia: \n${total} pesos colombianos`);