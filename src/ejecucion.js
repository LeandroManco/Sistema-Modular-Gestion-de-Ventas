import { ventasIniciales } from "./datos.js";
import { registrarVenta, calcularTotal } from "./operaciones.js";

registrarVenta(ventasIniciales, "Mouse inalambrico tipo gamer", 1, 80000);
registrarVenta(ventasIniciales, "Audifonos inalambricos tipo gamer", 1, 250000);

console.log("------ REPORTE DE CIERRE ------");

console.log("Historial de ventas:");
for (const venta of ventasIniciales) {
    console.log(`- ${venta.articulo}: ${venta.cantidad} x ${venta.precioUnitario} pesos colombianos`);
}

const total = calcularTotal(ventasIniciales);
console.log(`Total recaudado durante todo el dia: ${total} pesos colombianos`);