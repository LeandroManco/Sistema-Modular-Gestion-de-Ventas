# Sistema Modular de Gestión de Ventas

Aplicación en JavaScript (módulos ES) para digitalizar el cuadre de caja diario de una tienda local de tecnología. Mantiene el historial de ventas de la mañana, permite registrar nuevas ventas de la tarde y emite un reporte de cierre con el total recaudado.

## Qué hace

1. **Registro continuo:** las nuevas ventas se anexan al historial existente, sin sobrescribir lo anterior.
2. **Consolidación de ingresos:** recorre todo el historial y calcula el ingreso bruto total (cantidad × precio unitario de cada venta).

Cada venta tiene tres datos: **artículo**, **cantidad** y **precio unitario**.

## Estructura del proyecto

```
Sistema-Modular-Gestion-de-Ventas/
├── src/
│   ├── datos.js
│   ├── ejecucion.js
│   └── operaciones.js
├── package.json
└── README.md
```

| Módulo | Responsabilidad |
|---|---|
| `src/datos.js` | Simula la base de datos inicial: 3 ventas realizadas en la mañana. |
| `src/operaciones.js` | Lógica de negocio: registrar una venta y calcular el total. No contiene datos iniciales. |
| `src/ejecucion.js` | Punto de entrada. Importa los otros módulos, registra 2 ventas de la tarde e imprime el reporte de cierre. |

## Requisitos

- [Node.js](https://nodejs.org) (versión 14 o superior)

No se necesitan dependencias adicionales ni `npm install`.

## Cómo ejecutarlo

```
git clone https://github.com/LeandroManco/Sistema-Modular-Gestion-de-Ventas.git
cd Sistema-Modular-Gestion-de-Ventas
npm start
```

También se puede ejecutar directamente con:

```
node src/ejecucion.js
```

## Resultado esperado

Al ejecutarlo, la consola muestra el reporte de cierre:

- El historial actualizado con las 5 ventas (3 de la mañana y 2 de la tarde).
- El total recaudado al final, que con los datos actuales es **1880000 pesos colombianos**.

## Autor

Leandro Manco