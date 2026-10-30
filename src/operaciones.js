export function registrarVentasNegocio(historial, articulo, cantidad, precioUnitario) {
    const nuevasVentas = {articulo, cantidad, precioUnitario};

    historial.push(nuevasVentas);

    return historial;
}

export function calcularTotalDia(historial) {
    let total = 0;

    for (const venta of historial) {
        total += venta.cantidad * venta.precioUnitario;
    }

    return total;
}