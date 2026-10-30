function registrarVenta(historial, articulo, cantidad, precioUnitario) {
    const nuevaVenta = {articulo, cantidad, precioUnitario};

    historial.push(nuevaVenta)

    return historial;
}