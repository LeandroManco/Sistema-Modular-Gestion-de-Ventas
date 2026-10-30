export function registrarVenta(historial, articulo, cantidad, precioUnitario) {
    const nuevaVenta = {articulo, cantidad, precioUnitario};

    historial.push(nuevaVenta);

    return historial;
}

export function calcularTotal(historial) {
    let total = 0;

    for (const venta of historial) {
        total += venta.cantidad * venta.precioUnitario;
    }

    return total;
}